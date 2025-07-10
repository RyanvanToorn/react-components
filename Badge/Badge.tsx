import React from "react";
import Styles from "./Badge.module.css";
import type { BadgeProps } from "./Badge.types";

/**
 * Badge Component
 *
 *
 * @param {object} props - Component props
 * @returns {JSX.Element}
 */

export const Badge: React.FC<BadgeProps> = ({ isVisible = true, extendedClass = "", inlineStyles = {} }) => {
  if (!isVisible) return null;

  return <div className={`${Styles.Banner} badge ${extendedClass}`} style={inlineStyles}></div>;
};
