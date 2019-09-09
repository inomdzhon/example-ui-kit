import * as React from 'react';

export type TBase<T = HTMLElement> = {
  style?: React.CSSProperties;
  hostRef?: React.Ref<T>;
};
