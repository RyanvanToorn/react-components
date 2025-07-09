import React from "react";
import Styles from "./Label.module.css";
import type { LabelProps } from "./Label.types";

/**
 * Label Component
 * Used for displaying text.
 *
 * @param {object} props - Component props
 * @returns {JSX.Element}
 */

export const Label: React.FC<LabelProps> = ({ text = "", isVisible = true, extendedClass = "", inlineStyles = {} }) => {
  if (!isVisible) return null;

  return (
    <label className={`${Styles.label} label ${extendedClass}`} style={inlineStyles}>
      {text}
    </label>
  );
};
