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

export function ExampleMenu() {
  const [menuOpen, toggleMenu] = React.useState(false);

  function handleMenuClose() {
    toggleMenu(!menuOpen);
  }

  return (
    <div>
      <button onClick={handleMenuClose}>Open menu</button>
      <Menu open={menuOpen} onClose={handleMenuClose}>
        <Menu.Header
          leftSlot={<IconCross />}
          centerSlot={<div className="logo" />}
          isSticky={true}
        />
        <Menu.List hasSeparator={true}>
          <Menu.ListItem href="#" icon={IconPerson} fontSize="large">
            John Snow
          </Menu.ListItem>
          <Menu.ListItem href="#">
            <span style={{ color: '#4f6d8c' }}>Account №:</span> 10649803RUB
          </Menu.ListItem>
          <Menu.ListItem href="#" closeOnClick={true}>
            Deposit
          </Menu.ListItem>
          <Menu.ListItem href="#" closeOnClick={true}>
            Withdraw
          </Menu.ListItem>
          <Menu.ListItem href="#" closeOnClick={true} isActive={true}>
            Transactions
          </Menu.ListItem>
          <Menu.ListItem href="#" closeOnClick={true}>
            Trades
          </Menu.ListItem>
          <Menu.ListItem href="#" closeOnClick={true}>
            Profile
          </Menu.ListItem>
          <Menu.ListItem href="#" closeOnClick={true}>
            Quotes
          </Menu.ListItem>
        </Menu.List>
        <Menu.List hasSeparator={true}>
          <Menu.ListItem
            href="#"
            icon={IconUpDown}
            fontSize="large"
            hasGaps={true}
          >
            Trading platform
          </Menu.ListItem>
          <Menu.ListItem
            href="#"
            icon={IconHat}
            fontSize="large"
            hasGaps={true}
            isActive={true}
          >
            Education
          </Menu.ListItem>
          <Menu.ListItem
            href="#"
            icon={IconAnalytics}
            fontSize="large"
            hasGaps={true}
          >
            IconAnalytics
          </Menu.ListItem>
        </Menu.List>
        <Menu.List>
          <Menu.ListItem href="#" fontSize="small">
            About the Company
          </Menu.ListItem>
          <Menu.ListItem href="#" fontSize="small">
            Regulation
          </Menu.ListItem>
          <Menu.ListItem href="#" fontSize="small">
            Additional
          </Menu.ListItem>
        </Menu.List>
      </Menu>
    </div>
  );
}
