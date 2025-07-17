import React from "react";
import Styles from "./RadioButton.module.css";
import type { RadioButtonProps } from "./RadioButton.types";

/**
 * Radio Button Component
 * Used for displaying various options available to select.
 *
 * @param {object} props - Component props
 * @returns {JSX.Element}
 */

export const RadioButton: React.FC<RadioButtonProps> = ({
  items = [],
  isEnabled = true,
  isVisible = true,
  extendedClass = "",
  inlineStyles = {},
  name,
  selectedValue,
  onChange = () => {},
}) => {
  if (!isVisible) return null;

  return (
    <div className={`${Styles.RadioButtonGroup} radio-button-group ${extendedClass}`} style={inlineStyles}>
      {items.map((item) => (
        <label key={item.value} className={`${Styles.RadioButtonLabel} radio-button-label`}>
          <input
            type="radio"
            name={name}
            value={item.value}
            checked={selectedValue === item.value}
            disabled={!isEnabled}
            onChange={() => onChange(item.value)}
            className={Styles.RadioButton}
          />
          {item.label}
        </label>
      ))}
    </div>
  );
};
