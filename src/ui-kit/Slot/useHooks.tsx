import * as React from 'react';

export type TProvideProps<T> = {
  slot: T;
};

export type TResult<T> = React.ReactChild | React.ElementType<TProvideProps<T>>;

export type TProps<T> = {
  name?: T;
  children?: React.ReactChild;
};

export default function useSlot<T>(children: TResult<T>) {
  function Slot(props: TProps<T>) {
    const { name, children: defaultChildren } = props;
    const result: TResult<T>[] = [];

    React.Children.forEach(children, function(child) {
      if (!name && (typeof child === 'string' || typeof child === 'number')) {
        result.push(child);
        return;
      } else if (!React.isValidElement<TProvideProps<T>>(child)) {
        return;
      }

      if (name === child.props.slot || (!name && !('slot' in child.props))) {
        result.push(child);
      }
    });

    if (!result.length && defaultChildren) {
      result.push(defaultChildren);
    }

    return (
      <React.Fragment>
        {result}
      </React.Fragment>
    );
  }

  return Slot;
}
