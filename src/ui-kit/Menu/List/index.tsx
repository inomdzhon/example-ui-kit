import * as React from 'react';
import clsx from 'clsx';

import classes from './index.module.css';

type TProps = {
  hasGaps?: boolean;
  hasSeparator?: boolean;
  children: React.ReactNode;
};

function List(props: TProps) {
  const { hasGaps = true, hasSeparator, children } = props;

  return (
    <ul
      className={clsx(classes['list'], {
        [classes['list_has_gaps']]: hasGaps,
        [classes['list_has_seperator']]: hasSeparator,
      })}
    >
      {children}
    </ul>
  );
}

export default List;
