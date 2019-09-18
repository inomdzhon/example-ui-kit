import * as React from 'react';
import { createBrowserHistory } from 'history';
import { Router, Route, Link } from 'react-router-dom';

import { getUrl, withCommonWrapper } from 'route-utils';

import { ExampleLayout } from 'examples/layout';
import { ExampleMenu } from 'examples/menu';
import { ExampleSlots } from 'examples/slots';
import { ExampleUiStyleConfig } from 'examples/ui-style-config';

// inject ui-kit colors
import 'ui-kit/colors.css';


function App() {
  return (
    <div>
      <h1>Examples</h1>
      <ul>
        <li>
          <Link to={getUrl("/layout")}>Layout</Link>
        </li>
        <li>
          <Link to={getUrl("/example-menu")}>Example Menu</Link>
        </li>
        <li>
          <Link to={getUrl("/slots")}>Slots</Link>
        </li>
        <li>
          <Link to={getUrl("/ui-style-config")}>UI Style Config</Link>
        </li>
      </ul>
    </div>
  );
}

function Entry() {
  return (
    <Router history={createBrowserHistory()}>
      <Route path={getUrl("/layout")} component={ExampleLayout} />
      <Route path={getUrl("/example-menu")} component={withCommonWrapper(ExampleMenu)} />
      <Route
        path={getUrl("/slots")}
        component={withCommonWrapper(ExampleSlots)}
      />
      <Route
        path={getUrl("/ui-style-config")}
        component={withCommonWrapper(ExampleUiStyleConfig)}
      />
      <Route path={getUrl("/")} component={App} exact={true} />
    </Router>
  );
}

export default Entry;
