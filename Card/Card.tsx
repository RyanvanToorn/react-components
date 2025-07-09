import React from "react";
import Styles from "./Card.module.css";
import type { CardProps } from "./Card.types";

/**
 * Card Component
 * Used for displaying content in a styled card form.
 *
 * @param {object} props - Component props
 * @returns {JSX.Element}
 */

export const Card: React.FC<CardProps> = ({ header = null, footer = null, children, isVisible = true, extendedClass = "", inlineStyles = {} }) => {
  if (!isVisible) return null;

  return (
    <div className={`card ${Styles.card} ${extendedClass}`} style={inlineStyles}>
      <div className={Styles.cardHeader}>{header}</div>
      <div className={Styles.cardBody}>{children}</div>
      <div className={Styles.cardFooter}>{footer}</div>
    </div>
  );
};
