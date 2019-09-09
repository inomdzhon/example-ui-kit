import * as React from 'react';
import classNames from 'classnames';

import Context, { TContext } from './context';

import Panel from './Panel';
import List from './List';
import ListItem from './ListItem';

import classes from './index.module.css';

type TProps = {
  open?: boolean;
  onClose?(): void;
  hostRef?(): React.Ref<HTMLDivElement>;
};

class Menu extends React.Component<TProps> {
  static defaultProps = {
    open: false,
  };

  static Header = Panel;
  static Footer = Panel;
  static List = List;
  static ListItem = ListItem;

  state: TContext;

  constructor(props: TProps) {
    super(props);

    this.handleClose = this.handleClose.bind(this);

    this.state = {
      close: this.handleClose,
    };
  }

  private handleClose() {
    if (this.props.onClose) {
      this.props.onClose();
    }
  }

  render(): React.ReactElement {
    const { open, children, hostRef, onClose } = this.props;

    return (
      <Context.Provider value={this.state}>
        <div
          className={classNames(classes['menu'], {
            [classes['menu_state_open']]: open,
          })}
          ref={hostRef}
        >
          <div className={classes['menu-content']}>{children}</div>
          <div
            role="button"
            className={classes['menu-overlay']}
            onClick={onClose}
          />
        </div>
      </Context.Provider>
    );
  }
}

export default Menu;
