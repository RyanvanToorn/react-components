import React from "react";
import styles from "./Banner.module.css";

/**
 * Banner Component
 * Used for displaying various content.
 *
 * @param {object} props - Component props
 * @returns {JSX.Element}
 */

export function Banner({ contents = {}, isVisible = true, extendedClass = "", inlineStyles = {} }) {
  if (!isVisible) return null;

  return (
    <div className={`banner ${styles.Banner} ${extendedClass}`} style={inlineStyles}>
      {contents}
    </div>
  );
}
