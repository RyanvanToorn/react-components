import React from "react";
import Styles from "./Toast.module.css";
import type { ToastProps } from "./Toast.types";

/**
 * Toast Component
 * Used for displaying notification messages.
 *
 * @param {object} props - Component props
 * @returns {JSX.Element}
 */

export const Toast: React.FC<ToastProps> = ({ type = "info", message = "", duration = 3000, extendedClass = "", inlineStyles = {}, isVisible = true }) => {
  if (!isVisible) return null;

  return (
    <div className={`${Styles.Toast} toast toast-${type.toLowerCase()} ${extendedClass}`} style={inlineStyles} role="alert" aria-live="assertive">
      {message}
    </div>
  );
};
