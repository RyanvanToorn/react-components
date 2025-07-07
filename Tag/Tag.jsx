import React from "react";
import styles from "./Tag.module.css";

/**
 * Tag Component
 * Used for displaying text or other content in a minimalist form.
 *
 * @param {object} props - Component props
 * @returns {JSX.Element}
 */

export function Tag({
  text = "Tag",
  fillColor = "--color-green-medium",
  textColor = "--color-white",
  isVisible = true,
  extendedClass = "",
  inlineStyles = {},
}) {
  if (!isVisible) return null;

  return (
    <div
      className={`tag ${styles.Tag} ${extendedClass}`}
      style={{
        ...inlineStyles,
        backgroundColor: `var(${fillColor})`,
        color: `var(${textColor})`,
      }}
    >
      {text}
    </div>
  );
}
