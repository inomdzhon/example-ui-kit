import * as React from 'react';

export type TContext = {
  close(): void;
};

export default React.createContext<TContext>({
  close() {},
});
