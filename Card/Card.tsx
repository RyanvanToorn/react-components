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

export const Card: React.FC<CardProps> = ({
  headerContents = null,
  bodyContents = null,
  footerContents = null,
  isVisible = true,
  extendedClass = "",
  inlineStyles = {},
}) => {
  if (!isVisible) return null;

  return (
    <div className={`card ${Styles.card} ${extendedClass}`} style={inlineStyles}>
      <div className={Styles.cardHeader}>{headerContents}</div>
      <div className={Styles.cardBody}>{bodyContents}</div>
      <div className={Styles.cardFooter}>{footerContents}</div>
    </div>
  );
};
