import * as React from 'react';

import Card from './components/Card';

function Button(props: { slot?: string; children?: React.ReactNode }) {
  const { slot, children } = props;

  return (
    <button slot={slot} className="button">
      {children}
    </button>
  );
}

export function ExampleWebComponentStyle() {
  return (
    <div>
      <Card>
        <div slot="address">Address</div>
        <div slot="email">inom@space30.com</div>
        <div slot="name">
          Inom
          <div>Mirdzhamolov</div>
          <div>Komilovich</div>
        </div>
        <Button slot="footer">Send email</Button>
        Some another text
      </Card>
    </div>
  );
}
