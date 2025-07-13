import React from "react";
import Styles from "./Badge.module.css";
import type { BadgeProps } from "./Badge.types";

/**
 * Badge Component
 *
 * @param {object} props - Component props
 * @returns {JSX.Element}
 */

export const Badge: React.FC<BadgeProps> = ({ children = null, count = 0, isVisible = true, extendedClass = "", inlineStyles = {} }) => {
  if (!isVisible) return null;

  return (
    <div className={`${Styles.Badge} badge ${extendedClass}`} style={inlineStyles}>
      <div className={`${Styles.BadgeTop} badge-top`}>{count}</div>
      <div className={`${Styles.BadgeBottom} badge-bottom`}>{children}</div>
    </div>
  );
};
