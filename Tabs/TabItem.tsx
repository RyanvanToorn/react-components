import React from "react";
import Styles from "./Tabs.module.css";
import type { TabItemProps } from "./Tabs.types";

/**
 * Tab Item Component for navigating content within the same view.
 *
 * @param {object} props - Component props
 * @returns {JSX.Element}
 */

export const TabItem: React.FC<TabItemProps> = ({ isCurrentTab = false, content = <div></div>, extendedClass = "", inlineStyles = {} }) => {
  if (!isCurrentTab) return null;

  return (
    <div className={`${Styles.tabItem} tab-item ${extendedClass}`} style={inlineStyles}>
      {content}
    </div>
  );
};
