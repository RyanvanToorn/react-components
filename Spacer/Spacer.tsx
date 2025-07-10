import React from "react";
import Styles from "./Spacer.module.css";
import type { SpacerProps } from "./Spacer.types";

/**
 * Spacer Component
 * Used for displaying a clear space between components. Caters for both Vertical and Horizontal usages.
 *
 * @param {object} props - Component props
 * @returns {JSX.Element}
 */

export const Spacer: React.FC<SpacerProps> = ({ isHorizontal = true, lineWidth = 1, isVisible = true, extendedClass = "", inlineStyles = {} }) => {
  if (!isVisible) return null;

  return (
    <div className={`${Styles.Spacer} spacer ${isHorizontal ? Styles.HorizontalSpacer : Styles.VerticalSpacer}`}>
      <div className={`${Styles.SpacerLine} spacer-line`} style={{ width: `${lineWidth}px` }}></div>
    </div>
  );
};
