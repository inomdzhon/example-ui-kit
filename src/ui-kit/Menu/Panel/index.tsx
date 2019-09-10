import * as React from 'react';
import clsx from 'clsx';

import classes from './index.module.css';

type TProps = {
  isSticky?: boolean;
  leftSlot?: React.ReactNode;
  centerSlot?: React.ReactNode;
  rightSlot?: React.ReactNode;
};

function Panel(props: TProps) {
  const { leftSlot, centerSlot, rightSlot, isSticky } = props;

  return (
    <div
      className={clsx(classes['panel'], {
        [classes['panel_is_sticky']]: isSticky,
      })}
    >
      <div
        className={clsx(
          classes['panel-slot'],
          classes['panel-slot_pos_left'],
        )}
      >
        {leftSlot ? (
          <button className={classes['panel-control']}>{leftSlot}</button>
        ) : null}
      </div>
      <div
        className={clsx(
          classes['panel-slot'],
          classes['panel-slot_pos_center'],
        )}
      >
        {centerSlot ? (
          <button className={classes['panel-control']}>{centerSlot}</button>
        ) : null}
      </div>
      <div
        className={clsx(
          classes['panel-slot'],
          classes['panel-slot_pos_right'],
        )}
      >
        {rightSlot ? (
          <button className={classes['panel-control']}>{rightSlot}</button>
        ) : null}
      </div>
    </div>
  );
}

export default Panel;
