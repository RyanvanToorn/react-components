import React from "react";
import Styles from "./Tabs.module.css";
import type { TabHeaderProps } from "./Tabs.types";

/**
 * Tab Header Component for navigating content within the same view.
 *
 * @param {object} props - Component props
 * @returns {JSX.Element}
 */

export const TabHeader: React.FC<TabHeaderProps> = ({
  title = "title",
  isCurrentTab = false,
  onClick = () => {},
  isEnabled = true,
  isVisible = true,
  extendedClass = "",
  inlineStyles = {},
}) => {
  if (!isVisible) return null;

  return (
    <div
      className={`${Styles.tabHeader} tab-header ${isCurrentTab ? Styles.tabHeaderActive : Styles.tabHeaderInactive} ${
        isEnabled ? "tab-header--enabled" : "tab-header--disabled"
      } ${extendedClass}`}
      style={inlineStyles}
      onClick={onClick}
      role="tab"
      aria-selected={isCurrentTab}
    >
      <label className="tab-header__title">{title}</label>
    </div>
  );
};
