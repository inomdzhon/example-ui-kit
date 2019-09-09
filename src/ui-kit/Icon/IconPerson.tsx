import * as React from 'react';

import { DEFAULT_WIDTH, DEFAULT_HEIGHT } from './constants';

import { TProps } from './types';

export function IconPerson(props: TProps) {
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
      <path
        fill="none"
        fillRule="evenodd"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10.96 10.831H9.822V8.745c1.243-.397 2.072-1.49 2.072-2.781V4.175C11.893 2.19 10.133.5 7.853.5 5.472.5 3.608 2.189 3.608 4.374v1.59c0 1.291.829 2.284 2.072 2.781v2.086h-1.14C2.364 10.831.5 12.421.5 14.407c0 .596.518 1.093 1.14 1.093h11.392c1.45 0 1.968-.497 1.968-1.093 0-1.986-1.76-3.576-4.04-3.576z"
        transform="translate(4 4)"
      />
    </svg>
  );
}
