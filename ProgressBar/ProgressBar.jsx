import React from "react";
import styles from "./ProgressBar.module.css";

/**
 * ProgressBar Component
 * Used for displaying a percentage value in visual form.
 *
 * @param {object} props - Component props
 * @returns {JSX.Element}
 */

export function ProgressBar({ isVisible = true, extendedClass = "", inlineStyles = {} }) {
  if (!isVisible) return null;

  return <div className={`progess-bar ${styles.ProgressBar}`}></div>;
}
