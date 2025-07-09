import React, { useState } from "react";
import Styles from "./Accordion.module.css";
import { Icon } from "../Icon/Icon";
import { AccordionItem } from "./AccordionItem";
import type { AccordionProps } from "./Accordion.types";

/**
 * Accordion Component
 * Used for displaying various content with collapsible accordion items.
 *
 * @param {object} props - Component props
 * @returns {JSX.Element}
 */

export const Accordion: React.FC<AccordionProps> = ({
  items = [],
  isExpandAllVisible = false,
  isExpandAllEnabled = true,
  isVisible = true,
  extendedClass = "",
  inlineStyles = {},
}) => {
  if (!isVisible) return null;
  if (!items || items.length === 0) return null;

  // Track expanded state for all items
  const [expanded, setExpanded] = useState(items.map((item) => !!item.startExpanded));

  // Toggle a single item
  const handleToggle = (idx: number) => {
    setExpanded((prev) => prev.map((val, i) => (i === idx ? !val : val)));
  };

  // Expand or collapse all
  const handleExpandAll = (expand: boolean) => {
    setExpanded(items.map(() => expand));
  };

  // Determine if all are expanded
  const isAllExpanded = expanded.every(Boolean);

  return (
    <div className={`accordion ${Styles.Accordion} ${extendedClass}`} style={inlineStyles}>
      <div className="accordion__expand-all-container">
        <AccordionExpandAll
          isVisible={isExpandAllVisible}
          isEnabled={isExpandAllEnabled}
          isAllExpanded={isAllExpanded}
          onExpandAll={() => handleExpandAll(!isAllExpanded)}
        />
      </div>
      <div className="accordion__items-container">
        {items.map((item, idx) => (
          <AccordionItem
            key={item.key || idx}
            title={item.title}
            subtitle={item.subtitle}
            content={item.content}
            isExpanded={expanded[idx]}
            onToggle={() => handleToggle(idx)}
            isVisible={item.isVisible}
            isEnabled={item.isEnabled}
            extendedClass={item.extendedClass}
          />
        ))}
      </div>
    </div>
  );
};

function AccordionExpandAll({
  onExpandAll,
  isAllExpanded = false,
  isVisible = false,
  isEnabled = true,
}: {
  onExpandAll: () => void;
  isAllExpanded?: boolean;
  isVisible?: boolean;
  isEnabled?: boolean;
}) {
  if (!isVisible) return null;

  return (
    <div className={`accordion-expand-all-container ${Styles.AccordionExpandAllContainer}`}>
      <button
        className={`accordion-expand-all-button ${Styles.AccordionExpandAllButton} ${
          isEnabled ? Styles.AccordionExpandAllButtonEnabled : Styles.AccordionExpandAllButtonDisabled
        }`}
        onClick={onExpandAll}
        disabled={!isEnabled}
      >
        <Icon icon={isAllExpanded ? "angle-double-up" : "angle-double-down"} />
      </button>
    </div>
  );
}
