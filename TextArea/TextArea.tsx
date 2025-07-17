import React from "react";
import Styles from "./TextArea.module.css";
import type { TextAreaProps } from "./TextArea.types";

/**
 * Text Area Component
 * Used for displaying and editing string values in multiple rows.
 *
 * @param {object} props - Component props
 * @returns {JSX.Element}
 */

export const TextArea: React.FC<TextAreaProps> = ({
  value = "",
  isResizable = true,
  isEnabled = true,
  onChange = () => {},
  rows = 3,
  isVisible = true,
  extendedClass = "",
  inlineStyles = {},
}) => {
  if (!isVisible) return null;

  return (
    <textarea
      rows={rows}
      disabled={!isEnabled}
      onChange={onChange}
      value={value}
      className={`${Styles.TextArea} text-area ${extendedClass} ${isResizable ? Styles.TextAreaResizable : Styles.TextAreaNonResizable}`}
      style={inlineStyles}
    ></textarea>
  );
};
