import React from "react";
import Styles from "./Banner.module.css";
import type { BannerProps } from "./Banner.types";

/**
 * Banner Component
 * Used for displaying various content.
 *
 * @param {object} props - Component props
 * @returns {JSX.Element}
 */

export const Banner: React.FC<BannerProps> = ({ children = null, isVisible = true, extendedClass = "", inlineStyles = {} }) => {
  if (!isVisible) return null;

  return (
    <div className={`banner ${Styles.Banner} ${extendedClass}`} style={inlineStyles}>
      {children}
    </div>
  );
};
