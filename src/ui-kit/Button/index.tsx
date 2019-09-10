import * as React from 'react';
import clsx from 'clsx';

import classes from './index.module.scss';

type TProps = {
  color?: 'primary' | 'secondary';
  children?: React.ReactNode;
  style?: React.CSSProperties;
  hostRef?: React.Ref<HTMLButtonElement>;
};

export default function Button(props: TProps) {
  const { color = 'primary', children, style, hostRef } = props;
  return (
    <button
      style={style}
      ref={hostRef}
      className={clsx(classes['ui-button'], {
        [classes['ui-button_color_primary']]: color === 'primary',
        [classes['ui-button_color_secondary']]: color === 'secondary',
      })}
    >
      {children}
    </button>
  );
}
