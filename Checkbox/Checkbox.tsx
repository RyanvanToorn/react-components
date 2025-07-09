import React, { useState } from "react";
import Styles from "./Checkbox.module.css";
import type { CheckboxProps } from "./Checkbox.types";

/**
 * Checkbox Component
 * Used primarily as an input for boolean types.
 *
 * @param {object} props - Component props
 * @returns {JSX.Element}
 */

export const Checkbox: React.FC<CheckboxProps> = ({
  isChecked = false,
  onChange = () => {},
  isEnabled = true,
  isVisible = true,
  extendedClass = "",
  inlineStyles = {},
}) => {
  const [checked, setChecked] = useState(isChecked);

  if (!isVisible) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
    onChange(e.target.checked);
  };

  return (
    <input
      className={`${Styles.Checkbox} checkbox ${extendedClass}`}
      style={inlineStyles}
      type="checkbox"
      checked={checked}
      disabled={!isEnabled}
      onChange={handleChange}
    />
  );
};
