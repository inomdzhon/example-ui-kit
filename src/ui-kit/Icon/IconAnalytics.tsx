import * as React from 'react';

import { DEFAULT_WIDTH, DEFAULT_HEIGHT } from './constants';

import { TProps } from './types';

export function IconAnalytics(props: TProps) {
  const {
    width = DEFAULT_WIDTH,
    height = DEFAULT_HEIGHT,
    className,
    ...otherProps
  } = props;
  return (
    <svg
      fill="currentColor"
      className={className}
      width={width}
      height={height}
      viewBox="0 0 24 24"
      {...otherProps}
    >
      <path d="M12 12.707l-7.146 7.147a.5.5 0 01-.708-.708L11.293 12H9.5a.5.5 0 110-1h3a.5.5 0 01.5.5v3a.5.5 0 11-1 0v-1.793zM17 7h3.5a.5.5 0 110 1H17v11.5a.5.5 0 11-1 0V8H4.5a.5.5 0 010-1H16V3.5a.5.5 0 111 0V7z" />
    </svg>
  );
}
