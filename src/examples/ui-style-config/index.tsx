import * as React from 'react';

import Menu from 'ui-kit/Menu';

import classes from './index.module.css';

// icons
import {
  IconCross,
  IconPerson,
  IconUpDown,
  IconHat,
  IconAnalytics,
} from 'ui-kit/Icon';

import Button, {
  TCustomProperties as TButtonCustomProperties,
} from 'ui-kit/Button';
import { ChangeEventHandler } from 'react';
import { EventHandler } from 'react';
import { ChangeEvent } from 'react';

const UICustomProperties = [
  '--ui-accent-light',
  '--ui-accent-main',
  '--ui-accent-dark',
  '--ui-accent-contrast-text',
  '--ui-positive-light',
  '--ui-positive-main',
  '--ui-positive-dark',
  '--ui-positive-contrast-text',
  '--ui-negative-light',
  '--ui-negative-main',
  '--ui-negative-dark',
  '--ui-negative-contrast-text',
  '--ui-warning-light',
  '--ui-warning-main',
  '--ui-warning-dark',
  '--ui-warning-contrast-text',
];

const ButtonCustomProperties = [
  '--background',
  '--background-hover',
  '--background-focused',
  '--background-activated',
  '--background-disabled',
  '--color',
  '--color-hover',
  '--color-focused',
  '--color-activated',
  '--color-disabled',
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
  const [buttonCustomColor, setButtonCustomColor] = React.useState<
    TButtonCustomProperties
  >({});
  const [palette, togglePalette] = React.useState<any>();

  React.useEffect(() => {
    UICustomProperties.forEach(propertyName => {
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
    const CSSPropertyName = event.target.getAttribute('name')!;
    elemRoot.current!.querySelector<HTMLElement>(
      `#color-box${CSSPropertyName}`,
    )!.style.backgroundColor = event.target.value;
    elemRoot.current!.style.setProperty(CSSPropertyName, event.target.value);
    elemRoot.current!.style.setProperty(CSSPropertyName, event.target.value);
  }

  function handleColorButtonChange(event: React.ChangeEvent<HTMLInputElement>) {
    const CSSPropertyName = event.target.getAttribute('name');
    setButtonCustomColor({
      ...buttonCustomColor,
      [CSSPropertyName!]: event.target.value,
    });
  }

  return (
    <div ref={elemRoot}>
      <div className={classes['space-between']}>
        <Button styleConfig={buttonCustomColor} color="accent">
          Accent
        </Button>
        <Button color="positive">Positive</Button>
        <Button color="negative">Negative</Button>
        <Button color="warning">Warning</Button>
      </div>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
        }}
      >
        <div style={{ border: '1px dashed' }}>
          <h2>UI custom properties</h2>
          {UICustomProperties.map(propertyName => {
            const defaultColor = getDefaultPropertyValue(
              propertyName,
              document.documentElement,
            );
            return (
              <p key={propertyName}>
                <label htmlFor={propertyName}>
                  <code className={classes['code']}>{propertyName}: </code>
                </label>
                <input
                  id={propertyName}
                  type="text"
                  name={propertyName}
                  defaultValue={defaultColor}
                  onChange={handleColorChange}
                />
                <span
                  id={`color-box${propertyName}`}
                  className={classes['color-box']}
                  style={{ backgroundColor: defaultColor }}
                />
              </p>
            );
          })}
        </div>
        <div style={{ border: '1px dashed' }}>
          <h2>Button custom properties</h2>
          {ButtonCustomProperties.map(propertyName => (
            <p key={propertyName}>
              <label htmlFor={propertyName}>
                <code className={classes['code']}>{propertyName}: </code>
              </label>
              <input
                id={propertyName}
                type="text"
                name={propertyName}
                onChange={handleColorButtonChange}
              />
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
