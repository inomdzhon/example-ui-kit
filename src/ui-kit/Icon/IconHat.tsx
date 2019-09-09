import * as React from 'react';

import { DEFAULT_WIDTH, DEFAULT_HEIGHT } from './constants';

import { TProps } from './types';

export function IconHat(props: TProps) {
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
      <path d="M3 9.49a.495.495 0 01.256-.427l8.95-5a.5.5 0 01.487 0l9.05 5.04a.5.5 0 01-.003.875L19 11.48v4.35a.5.5 0 01-.24.427l-6 3.67a.5.5 0 01-.52 0l-6-3.67A.5.5 0 016 15.83v-4.36l-2-1.118V14.5a.5.5 0 11-1 0V9.49zm15 2.538l-5.31 2.91a.5.5 0 01-.484-.001L7 12.028v3.522l5.5 3.364L18 15.55v-3.522zm2.466-2.492L12.45 5.073 4.525 9.5l7.927 4.429 8.014-4.393z" />
    </svg>
  );
}
