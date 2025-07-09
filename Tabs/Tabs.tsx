import React, { useState } from "react";
import Styles from "./Tabs.module.css";
import { TabHeader } from "./TabHeader";
import { TabItem } from "./TabItem";
import type { TabProps } from "./Tabs.types";

/**
 * Tab Component for navigating content within the same view.
 *
 * @param {object} props - Component props
 * @returns {JSX.Element}
 */

export const Tabs: React.FC<TabProps> = ({
  headers = [],
  items = [],
  isVertical = false,
  defaultTab = 0,
  isVisible = true,
  extendedClass = "",
  inlineStyles = {},
}) => {
  const [activeTab, setActiveTab] = useState(defaultTab);

  if (!isVisible) return null;

  if (headers.length !== items.length) {
    console.log("Tabs - mismatch between number of headers and number of items");
    return null;
  }

  return (
    <div className={`tabs ${isVertical ? "tabs--vertical" : "tabs--horizontal"} ${Styles.tabs} ${extendedClass}`} style={inlineStyles}>
      {/* Headers */}
      <div className={`tab-header-div ${Styles.tabHeaderDiv}`}>
        {headers.map((headerProps, idx) => (
          <TabHeader key={idx} {...headerProps} isCurrentTab={activeTab === idx} onClick={() => setActiveTab(idx)} />
        ))}
      </div>
      {/* Contents */}
      <div className={`tab-items-div ${Styles.tabItemsDiv}`}>
        {items.map((itemProps, idx) => (
          <TabItem key={idx} {...itemProps} isCurrentTab={activeTab === idx} />
        ))}
      </div>
    </div>
  );
};
