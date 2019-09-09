import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import { ExampleMenu } from 'examples/menu';
import { ExampleSubcomponentStyle } from 'examples/sub-component-style';
import { ExampleWebComponentStyle } from 'examples/web-component-style';

function App() {
  return (
    <div>
      <h1>Examples</h1>
      <ul>
        <li>
          <Link to="/example-menu">ExampleMenu</Link>
        </li>
        <li>
          <Link to="/sub-component-style">Sub-component style</Link>
        </li>
        <li>
          <Link to="/web-component-style">Web Component Style</Link>
        </li>
      </ul>
    </div>
  );
}

function withCommonWrapper<T>(Component: React.ComponentType) {
  return function WithCommonWrapper(props: T) {
    return (
      <React.Fragment>
        <Link to="/">Back to all examples</Link>
        <hr />
        <Component {...props} />
      </React.Fragment>
    );
  };
}

function Entry() {
  return (
    <BrowserRouter>
      <Route path="/example-menu" component={withCommonWrapper(ExampleMenu)} />
      <Route
        path="/sub-component-style"
        component={withCommonWrapper(ExampleSubcomponentStyle)}
      />
      <Route
        path="/web-component-style"
        component={withCommonWrapper(ExampleWebComponentStyle)}
      />
      <Route path="/" component={App} exact={true} />
    </BrowserRouter>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<Entry />, rootElement);
