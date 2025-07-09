import React, { useState } from "react";
import Styles from "./Accordion.module.css.js";
import { Icon } from "../Icon/Icon.tsx";
import type { AccordionItemProps } from "./Accordion.types.js";

/**
 * Accordion Component
 * Used for displaying various content with collapsible accordion items.
 *
 * @param {object} props - Component props
 * @returns {JSX.Element}
 */

export const AccordionItem: React.FC<AccordionItemProps> = ({
  title = "",
  subtitle = "",
  content = <div></div>,
  isExpanded = false,
  onToggle = () => {},
  isVisible = true,
  isEnabled = true,
  extendedClass = "",
}) => {
  if (!isVisible) return null;

  return (
    <div
      className={`accordion-item ${Styles.AccordionItem} ${extendedClass} ${
        isExpanded ? `${Styles.AccordionitemExpanded} accordion-item--expanded` : `${Styles.AccordionItemCollapsed} accordion-item--collapsed`
      }`}
    >
      <div
        className={`accordion-item__header ${Styles.AccordionItemHeader}`}
        onClick={isEnabled ? onToggle : undefined}
        style={{ cursor: isEnabled ? "pointer" : "not-allowed" }}
      >
        <div className={Styles.AccordionItemHeaderLeft}>
          <div className={`accordion-item__header-title ${Styles.AccordionItemHeaderTitle}`}>{title}</div>
          <div className={`accordion-item__header-subtitle ${Styles.AccordionItemHeaderSubtitle}`}>{subtitle}</div>
        </div>
        <div className={Styles.AccordionItemHeaderRight}>
          <Icon icon={isExpanded ? "chevron-up" : "chevron-down"} />
        </div>
      </div>
      {isExpanded && <div className={`accordion-item__content ${Styles.AccordionItemContent}`}>{content}</div>}
    </div>
  );
};
