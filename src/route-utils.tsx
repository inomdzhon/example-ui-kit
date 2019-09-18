import * as React from 'react';
import { Link, withRouter, RouteComponentProps } from 'react-router-dom';

export function getUrl(path: string): string {
  return `${process.env.PUBLIC_URL}${path}`;
}

const BackButton = withRouter(function BackButton(props: RouteComponentProps) {
  const handleBackClick = React.useCallback(function () {
    const splitPath = props.location.pathname
      // remove last slash (ex: `/auth/registration/` -> `/auth/registration`)
      .replace(/\/$/, '')
      .split('/');

    splitPath.pop();

    if (splitPath.length > 1) {
      props.history.push(splitPath.join('/'));
    } else {
      props.history.push('/');
    }
  }, [props.location.pathname]);

  return <button onClick={handleBackClick}>Back to all examples</button>;
});

export function withCommonWrapper<T>(Component: React.ComponentType<T>) {
  return function WithCommonWrapper(props: T) {
    return (
      <React.Fragment>
        <BackButton />
        <hr />
        <Component {...props} />
      </React.Fragment>
    );
  };
}
