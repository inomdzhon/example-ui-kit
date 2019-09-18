import * as React from 'react';
import { Route, Link } from 'react-router-dom';

import { getUrl } from 'route-utils';

import { ExampleSubcomponentStyle } from './subpages/sub-component-style';
import { ExampleWebComponentStyle } from './subpages/web-component-style';

function Base() {
  return (
    <div>
      <h1>Examples</h1>
      <ul>
        <li>
          <Link to={getUrl("/slots/sub-component-style")}>Sub-component style</Link>
        </li>
        <li>
          <Link to={getUrl("/slots/web-component-style")}>Web Component Style</Link>
        </li>
      </ul>
    </div>
  );
}

export function ExampleSlots() {
  return (
    <React.Fragment>
      <Route
        path={getUrl("/slots/sub-component-style")}
        component={ExampleSubcomponentStyle}
      />
      <Route
        path={getUrl("/slots/web-component-style")}
        component={ExampleWebComponentStyle}
      />
      <Route path={getUrl("/slots")} component={Base} exact={true} />
    </React.Fragment>
  );
}
