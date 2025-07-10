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

export const Toast: React.FC<ToastProps> = ({ type = "info", message = "", onClose, extendedClass = "", inlineStyles = {}, isVisible = true }) => {
  if (!isVisible) return null;

  const typeClass =
    type === "info"
      ? Styles.ToastInfo
      : type === "success"
      ? Styles.ToastSuccess
      : type === "error"
      ? Styles.ToastError
      : type === "warning"
      ? Styles.ToastWarning
      : "";

  return (
    <div className={`${Styles.Toast} toast ${extendedClass} ${typeClass}`} style={inlineStyles} role="alert" aria-live="assertive">
      <span>{message}</span>
      {onClose && (
        <button className={Styles.ToastCloseButton} onClick={onClose} aria-label="Close">
          &times;
        </button>
      )}
    </div>
  );
};
