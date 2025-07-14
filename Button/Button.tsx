import React from "react";
import Styles from "./Button.module.css";
import type { ButtonProps } from "./Button.types";
import type { ButtonType } from "./Button.types";

/**
 * Button Component
 * Used for providing a button of various types and variations to facilitate user interaction
 *
 * @param {object} props - Component props
 * @returns {JSX.Element}
 */

export const Button: React.FC<ButtonProps> = ({
  onClick,
  children = [],
  isEnabled = true,
  type = "button",
  isVisible = true,
  extendedClass = "",
  inlineStyles = {},
}) => {
  if (!isVisible) return null;

  return (
    <button type={type} onClick={onClick} disabled={!isEnabled} className={`${Styles.Button} button ${extendedClass}`} style={inlineStyles}>
      {children}
    </button>
  );
};
