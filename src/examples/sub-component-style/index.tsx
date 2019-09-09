import * as React from 'react';

import Menu from 'ui-kit/Menu';

// icons
import {
  IconCross,
  IconPerson,
  IconUpDown,
  IconHat,
  IconAnalytics,
} from 'ui-kit/Icon';

import Card from './components/Card';

function Button(props: { slot?: string; children?: React.ReactNode }) {
  const { slot, children } = props;

  return (
    <button slot={slot} className="button">
      {children}
    </button>
  );
}

export function ExampleSubcomponentStyle() {
  return (
    <div>
      <Card>
        <Card.Slot name="address">Address</Card.Slot>
        <Card.Slot name="email">inom@space30.com</Card.Slot>
        <Card.Slot name="name">
          Inom
          <div>Mirdzhamolov</div>
          <div>Komilovich</div>
        </Card.Slot>
        <Card.Slot name="footer">
          <Button>Send email</Button>
        </Card.Slot>
        <Card.Slot>Some another text</Card.Slot>
      </Card>
    </div>
  );
}
