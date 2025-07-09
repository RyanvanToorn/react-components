import React from "react";
import Styles from "./Chip.module.css";
import type { ChipProps } from "./Chip.types";

/**
 * Chip Component
 * Used for displaying selected items or other data.
 *
 * @param {object} props - Component props
 * @returns {JSX.Element}
 */

export const Chip: React.FC<ChipProps> = ({
  text = "Chip",
  onClick = () => {},
  isEnabled = false,
  isVisible = true,
  extendedClass = "",
  inlineStyles = {},
}) => {
  if (!isVisible) return null;

  return (
    <div
      className={`${Styles.Chip} chip ${isEnabled ? Styles.ChipEnabled : Styles.ChipDisabled}  ${extendedClass}`}
      style={inlineStyles}
      onClick={isEnabled ? onClick : undefined}
    >
      {text}
    </div>
  );
};
