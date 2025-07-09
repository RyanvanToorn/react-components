import React, { useState } from "react";
import Styles from "./SwitchToggle.module.css";
import type { SwitchToggleProps } from "./SwitchToggle.types";

/**
 * Switch Toggle component
 * Used for toggling input or options
 *
 * @param {object} props - Component props
 * @returns {JSX.Element}
 */

export const SwitchToggle: React.FC<SwitchToggleProps> = ({
  defaultChecked = false,
  onToggle = () => {},
  isVisible = true,
  extendedClass = "",
  inlineStyles = {},
}) => {
  if (!isVisible) return null;

  const [isChecked, setIsChecked] = useState(defaultChecked);

  const handleChange = () => {
    const newChecked = !isChecked;
    setIsChecked(newChecked);
    onToggle(newChecked);
  };

  return (
    <input
      className={`${Styles.switchToggle} switch-toggle ${extendedClass}`}
      style={inlineStyles}
      type="checkbox"
      checked={isChecked}
      onChange={handleChange}
    />
  );
};
