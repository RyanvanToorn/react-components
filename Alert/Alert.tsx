import React from "react";
import Styles from "./Alert.module.css";
import type { AlertProps } from "./Alert.types";

/**
 * Alert Component
 * Used for displaying notification messages without disrupting the user's experience.
 *
 * @param {object} props - Component props
 * @returns {JSX.Element}
 */

export const Alert: React.FC<AlertProps> = ({ type = "info", message = "", duration = 3000, extendedClass = "", inlineStyles = {}, isVisible = true }) => {
  if (!isVisible) return null;

  return (
    <div className={`${Styles.Alert} alert alert-${type.toLowerCase()} ${extendedClass}`} style={inlineStyles} role="alert" aria-live="assertive">
      {message}
    </div>
  );
};
