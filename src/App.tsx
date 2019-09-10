import * as React from 'react';
import { createBrowserHistory } from 'history';
import { Router, Route, Link } from 'react-router-dom';

import { ExampleMenu } from 'examples/menu';
import { ExampleSubcomponentStyle } from 'examples/sub-component-style';
import { ExampleWebComponentStyle } from 'examples/web-component-style';
import { ExampleUiStyleConfig } from 'examples/ui-style-config';

// inject ui-kit colors
import 'ui-kit/colors.css';

function getUrl(path: string): string {
  return `${process.env.PUBLIC_URL}${path}`;
}

function App() {
  return (
    <div>
      <h1>Examples</h1>
      <ul>
        <li>
          <Link to={getUrl("/example-menu")}>ExampleMenu</Link>
        </li>
        <li>
          <Link to={getUrl("/sub-component-style")}>Sub-component style</Link>
        </li>
        <li>
          <Link to={getUrl("/web-component-style")}>Web Component Style</Link>
        </li>
        <li>
          <Link to={getUrl("/ui-style-config")}>UI Style Config</Link>
        </li>
      </ul>
    </div>
  );
}

function withCommonWrapper<T>(Component: React.ComponentType) {
  return function WithCommonWrapper(props: T) {
    return (
      <React.Fragment>
        <Link to={getUrl("/")}>Back to all examples</Link>
        <hr />
        <Component {...props} />
      </React.Fragment>
    );
  };
}

function Entry() {
  return (
    <Router history={createBrowserHistory()}>
      <Route path={getUrl("/example-menu")} component={withCommonWrapper(ExampleMenu)} />
      <Route
        path={getUrl("/sub-component-style")}
        component={withCommonWrapper(ExampleSubcomponentStyle)}
      />
      <Route
        path={getUrl("/web-component-style")}
        component={withCommonWrapper(ExampleWebComponentStyle)}
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
