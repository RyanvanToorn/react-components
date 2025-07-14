import React from "react";
import Styles from "./Button.module.css";
import type { SplitButtonProps } from "./Button.types";

/**
 * Split Button Component
 * Used for providing a set of buttons which can be selected from the same parent
 *
 * @param {object} props - Component props
 * @returns {JSX.Element}
 */

export const SplitButton: React.FC<SplitButtonProps> = ({
  onClick,
  children = [],
  isEnabled = true,
  isVisible = true,
  extendedClass = "",
  inlineStyles = {},
}) => {
  if (!isVisible) return null;

  return (
    <button onClick={onClick} disabled={!isEnabled} className={`${Styles.Button} button ${extendedClass}`} style={inlineStyles}>
      {children}
    </button>
  );
};
