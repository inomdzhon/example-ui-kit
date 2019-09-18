import * as React from 'react';

import withSlot, { TWithSlotProps } from 'ui-kit/Slot/withSlot';

import './index.css';

type TSlotName = 'name' | 'address' | 'email' | 'footer';

type TProps = TWithSlotProps<TSlotName> & {
  children?: React.ReactNode;
};

class Card extends React.Component<TProps> {
  render() {
    const { Slot, children } = this.props;

    return (
      <div className="card">
        <h2 className="card__name">
          <Slot name="name" />
        </h2>
        <div className="card__address">
          <Slot name="address">
            <span className="card__missing">Unknown address</span>
          </Slot>
        </div>
        <div className="card__email">
          <Slot name="email">
            <span className="card__missing">Unknown email</span>
          </Slot>
        </div>
        <div className="card__footer">
          <Slot name="footer" />
        </div>
        <Slot />
      </div>
    );
  }
}

export default withSlot<TProps, TSlotName>(Card);
