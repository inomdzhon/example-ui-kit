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

import Button from 'ui-kit/Button';
import { ChangeEventHandler } from 'react';
import { EventHandler } from 'react';
import { ChangeEvent } from 'react';

const GlobalCSSProperties = [
  '--global-primary-light',
  '--global-primary-main',
  '--global-primary-dark',
  '--global-primary-contrast',
  '--global-secondary-light',
  '--global-secondary-main',
  '--global-secondary-dark',
  '--global-secondary-contrast',
];

const ButtonCSSProperties = [
  '--background',
  '--background-hover',
  '--background-focused',
  '--background-activated',
  '--color',
];

function getDefaultPropertyValue(name: string, elem: any): string {
  if (elem) {
    const documentElementStyles = window.getComputedStyle(elem);
    return documentElementStyles.getPropertyValue(name);
  }

  return '';
}

export function ExampleUiStyleConfig() {
  const elemRoot = React.createRef<HTMLDivElement>();
  const elemFirstButton = React.createRef<HTMLButtonElement>();
  const [palette, togglePalette] = React.useState<any>();

  React.useEffect(() => {
    GlobalCSSProperties.forEach(propertyName => {
      if (!elemRoot.current) {
        return;
      }

      elemRoot.current.style.setProperty(
        propertyName,
        getDefaultPropertyValue(propertyName, document.documentElement),
      );
    });
  }, []);

  function handleColorChange(event: React.ChangeEvent<HTMLInputElement>) {
    const CSSPropertyName = event.target.getAttribute('name');
    elemRoot.current!.style.setProperty(CSSPropertyName!, event.target.value);
  }

  function handleColorButtonChange(event: React.ChangeEvent<HTMLInputElement>) {
    const CSSPropertyName = event.target.getAttribute('name');
    elemFirstButton.current!.style.setProperty(CSSPropertyName!, event.target.value);
  }

  return (
    <div ref={elemRoot}>
      <Button hostRef={elemFirstButton} color="primary">
        Button
      </Button>
      <br />
      <br />
      <Button color="secondary">Button</Button>
      <br />
      <br />
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
      }}>
        <div style={{ border: '1px dashed' }}>
          <h2>Global style</h2>
          {GlobalCSSProperties.map(propertyName => (
            <p key={propertyName}>
              <label htmlFor={propertyName}>{propertyName}: </label>
              <input
                id={propertyName}
                type="text"
                name={propertyName}
                defaultValue={getDefaultPropertyValue(
                  propertyName,
                  document.documentElement,
                )}
                onChange={handleColorChange}
              />
            </p>
          ))}
        </div>
        <div style={{ border: '1px dashed' }}>
          <h2>Button style</h2>
          {ButtonCSSProperties.map(propertyName => (
            <p key={propertyName}>
              <label htmlFor={propertyName}>{propertyName}: </label>
              <input
                id={propertyName}
                type="text"
                name={propertyName}
                defaultValue={getDefaultPropertyValue(
                  propertyName,
                  elemFirstButton.current,
                )}
                onChange={handleColorButtonChange}
              />
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
