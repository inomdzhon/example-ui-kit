import * as React from 'react';
import clsx from 'clsx';

import Context from '../context';

import classes from './index.module.css';

type TProps = {
  href?: string;
  icon?: React.ComponentType<{ className: string }>;
  fontSize?: 'small' | 'medium' | 'large';
  closeOnClick?: boolean;
  hasGaps?: boolean;
  isActive?: boolean;
  children: React.ReactNode;
  onClick?(event: React.MouseEvent<HTMLAnchorElement>): void;
};

function ListItem(props: TProps) {
  const {
    href,
    icon: Icon,
    fontSize = 'medium',
    closeOnClick,
    hasGaps,
    isActive,
    children,
    onClick,
  } = props;
  const { close } = React.useContext(Context);

  function handleClick(event: React.MouseEvent<HTMLAnchorElement>) {
    if (onClick) {
      onClick(event);
    }

    if (isActive) {
      event.preventDefault();
      return;
    }

    if (closeOnClick) {
      close();
    }
  }

  return (
    <li className={classes['list-item']}>
      <a
        href={href}
        className={clsx(classes['list-item-link'], {
          [classes[`list-item-link_font-size_small`]]: fontSize === 'small',
          [classes[`list-item-link_font-size_medium`]]: fontSize === 'medium',
          [classes[`list-item-link_font-size_large`]]: fontSize === 'large',
          [classes['list-item-link_has_gaps']]: hasGaps,
          [classes['list-item-link_state_active']]: isActive,
        })}
        onClick={handleClick}
      >
        {Icon ? <Icon className={classes['list-item-link-icon']} /> : null}
        {children}
      </a>
    </li>
  );
}

export default ListItem;
