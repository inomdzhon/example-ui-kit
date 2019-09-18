import * as React from 'react';
import clsx from 'clsx';

import classes from './index.module.css';

export function ExampleLayout() {
  const [menuOpen, toggleMenu] = React.useState(false);

  function handleMenuClose() {
    toggleMenu(!menuOpen);
  }

  return (
    <div className={classes['page']}>
      <div className={classes['page__tab-bar']}>
        <div className={classes['tab-bar']}>Tab</div>
      </div>
      <div className={classes['page__content']}>
        <div className={classes['content']}>Content</div>
      </div>
    </div>
  );
}
