import * as React from 'react';

import useSlot from 'ui-kit/Slot/useHooks';

import './index.css';

type TProps = {
  children: any;
};

export default function Card(props: TProps) {
  const { children } = props;
  const Slot = useSlot<'name' | 'address' | 'email' | 'footer'>(children);

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
