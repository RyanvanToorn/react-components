import React from "react";
import Styles from "./Tag.module.css";
import type { TagProps } from "./Tag.types";

/**
 * Tag Component
 * Used for displaying text or other content in a minimalist form.
 *
 * @param {object} props - Component props
 * @returns {JSX.Element}
 */

export const Tag: React.FC<TagProps> = ({
  text = "Tag",
  fillColor = "--color-green-medium",
  textColor = "--color-white",
  isVisible = true,
  extendedClass = "",
  inlineStyles = {},
}) => {
  if (!isVisible) return null;

  return (
    <div
      className={`${Styles.Tag} tag ${extendedClass}`}
      style={{
        ...inlineStyles,
        backgroundColor: `var(${fillColor})`,
        color: `var(${textColor})`,
      }}
    >
      {text}
    </div>
  );
};
