import React from "react";
import Styles from "./Sidebar.module.css";
import type { SidebarProps, SidebarHeaderProps, SidebarFooterProps } from "./Sidebar.types";

/**
 * Sidebar Component
 * Used for displaying content in a sidebar view stemming from the side of the screen.
 *
 * @param {object} props - Component props
 * @returns {JSX.Element}
 */

export const Sidebar: React.FC<SidebarProps> = ({ isOpen = false, isVisible = true, extendedClass = "", inlineStyles = {} }) => {
  if (!isVisible) return null;

  return <div className={`${Styles.Sidebar} sidebar ${extendedClass} ${isOpen ? Styles.SidebarOpen : Styles.SidebarClosed}`} style={inlineStyles}></div>;
};

export const SidebarHeader: React.FC<SidebarHeaderProps> = ({ isVisible = true, extendedClass = "", inlineStyles = {} }) => {
  if (!isVisible) return null;

  return <div className={`${Styles.SidebarHeader} sidebar-header ${extendedClass} `} style={inlineStyles}></div>;
};

export const SidebarFooter: React.FC<SidebarFooterProps> = ({ isVisible = true, extendedClass = "", inlineStyles = {} }) => {
  if (!isVisible) return null;

  return <div className={`${Styles.SidebarFooter} sidebar-footer ${extendedClass} `} style={inlineStyles}></div>;
};
