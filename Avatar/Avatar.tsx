import React from "react";
import Styles from "./Avatar.module.css";
import type { AvatarProps } from "./Avatar.types";

/**
 * Avatar Component
 * Used for displaying contents in a typical avatar display component.
 *
 * @param {object} props - Component props
 * @returns {JSX.Element}
 */

export const Avatar: React.FC<AvatarProps> = ({
  size = "Small",
  children,
  hasBorder = true,
  borderColor = "#FFFF",
  isVisible = true,
  extendedClass = "",
  inlineStyles = {},
}) => {
  if (!isVisible) return null;

  const sizeClass = size === "Small" ? Styles.AvatarSmall : size === "Medium" ? Styles.AvatarMedium : size === "Large" ? Styles.AvatarLarge : "";

  return (
    <div
      className={`${Styles.Avatar} avatar ${sizeClass} ${extendedClass}`}
      style={{
        ...inlineStyles,
        ...(hasBorder ? { border: `2px solid ${borderColor}` } : {}),
      }}
    >
      {children}
    </div>
  );
};
