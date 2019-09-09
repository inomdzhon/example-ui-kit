import * as React from 'react';

import { DEFAULT_WIDTH, DEFAULT_HEIGHT } from './constants';

import { TProps } from './types';

export function IconCross(props: TProps) {
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
      <path d="M12.5 11.793L7.854 7.146a.5.5 0 10-.708.708l4.647 4.646-4.647 4.646a.5.5 0 00.708.708l4.646-4.647 4.646 4.647a.5.5 0 00.708-.708L13.207 12.5l4.647-4.646a.5.5 0 00-.708-.708L12.5 11.793z" />
    </svg>
  );
}
