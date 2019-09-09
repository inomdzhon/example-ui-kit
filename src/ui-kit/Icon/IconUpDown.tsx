import * as React from 'react';

import { DEFAULT_WIDTH, DEFAULT_HEIGHT } from './constants';

import { TProps } from './types';

export function IconUpDown(props: TProps) {
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
      <path d="M4 7.179c0-.274.198-.619.43-.763l6.714-4.18c.473-.293 1.242-.292 1.712 0l6.714 4.18c.237.148.43.5.43.763v2.82A.999.999 0 0119 11H5a1 1 0 01-1-1.001v-2.82zm15 0c0 .04-.004.052 0 .06.004.006.015.01.041.026l-6.713-4.18c-.148-.091-.507-.091-.656 0L5 7.24V10h14V7.179zM4 16.82V14a1 1 0 011-1h14c.555 0 1 .448 1 1.001v2.82c0 .263-.193.615-.43.763l-6.714 4.18c-.47.292-1.24.293-1.712 0l-6.714-4.18c-.232-.144-.43-.49-.43-.763zm8.328 4.093l6.713-4.179c-.026.017-.037.02-.041.025-.004.009 0 .02 0 .061V14H5v2.761l6.672 4.153c.149.092.508.092.656 0z" />
    </svg>
  );
}
