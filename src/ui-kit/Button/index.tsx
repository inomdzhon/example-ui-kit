import * as React from 'react';
import clsx from 'clsx';

import classes from './index.module.scss';

export type TCustomProperties = Partial<{
  '--background': string;
  '--background-hover': string;
  '--background-focused': string;
  '--background-activated': string;
  '--background-disabled': string;
  '--color': string;
  '--color-hover': string;
  '--color-focused': string;
  '--color-activated': string;
  '--color-disabled': string;
}>

type TProps = {
  color?: 'accent' | 'positive' | 'negative' | 'warning';
  children?: React.ReactNode;
  style?: React.CSSProperties;
  styleConfig?: TCustomProperties;
  hostRef?: React.Ref<HTMLButtonElement>;
};

export default function Button(props: TProps) {
  const { color = 'positive', children, style, styleConfig, hostRef } = props;
  return (
    <button
      style={{ ...style, ...styleConfig as React.CSSProperties }}
      ref={hostRef}
      className={clsx(classes['ui-button'], {
        [classes['ui-button_color_accent']]: color === 'accent',
        [classes['ui-button_color_positive']]: color === 'positive',
        [classes['ui-button_color_negative']]: color === 'negative',
        [classes['ui-button_color_warning']]: color === 'warning',
      })}
    >
      {children}
    </button>
  );
}
