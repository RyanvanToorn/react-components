import React from "react";
import Styles from "./ProgressBar.module.css";
import type { ProgressBarProps } from "./ProgressBar.types";

/**
 * ProgressBar Component
 * Used for displaying a percentage value in visual form.
 *
 * @param {object} props - Component props
 * @returns {JSX.Element}
 */

export const ProgressBar: React.FC<ProgressBarProps> = ({ progress, isVisible = true, extendedClass = "", inlineStyles = {} }) => {
  if (!isVisible) return null;

  const clampedProgress = Math.max(0, Math.min(100, progress));

  return (
    <div className={`${Styles.ProgressBar} progress-bar ${extendedClass}`} style={inlineStyles}>
      <div className={`${Styles.ProgressBarFill} progress-bar-filled`} style={{ width: `${clampedProgress}%` }} />
    </div>
  );
};
