import * as React from 'react';

export type TSlotProps<T> = {
  name?: T;
  children?: any;
};

export type TWithSlotProps<T> = {
  Slot(props: TSlotProps<T>): any;
};

export default function withSlot<P extends TWithSlotProps<T>, T = string>(
  Component: React.ComponentType<P>,
) {
  type TProps = Omit<P, keyof TWithSlotProps<T>>;

  class WithSlot extends React.Component<TProps, {}> {
    static displayName: string = `WithSlot(${Component.displayName ||
      Component.name})`;
    static Slot(props: TSlotProps<T>) {
      const { children = null } = props;
      return children;
    }

    constructor(props: TProps) {
      super(props);
      this.slot = this.slot.bind(this);
    }

    slot(props: TSlotProps<T>): React.ReactNode {
      const { children } = this.props;

      const { name, children: defaultChildren } = props;
      const result: any[] = [];

      React.Children.forEach(children, function(child) {
        if (!React.isValidElement<TSlotProps<T>>(child)) {
          return;
        }

        if (name === child.props.name || (!name && !('name' in child.props))) {
          result.push(child);
        }
      });

      if (!result.length && defaultChildren) {
        result.push(defaultChildren);
      }

      return <React.Fragment>{result}</React.Fragment>;
    }

    render(): React.ReactNode {
      const { ...otherProps } = this.props;
      return <Component Slot={this.slot} {...(otherProps as any)} />;
    }
  }

  return WithSlot;
}
