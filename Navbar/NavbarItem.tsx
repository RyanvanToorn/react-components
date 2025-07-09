import React from "react";
import Styles from "./Navbar.module.css";
import type { NavbarItemProps } from "./Navbar.types";

/**
 * Dynamic Navbar Item Component for responsive devices
 * Used for displaying various menu items (NavbarItems) on the side or bottom of the screen depending on the device type.
 *
 * @param {object} props - Component props
 * @returns {JSX.Element}
 */

export const NavbarItem: React.FC<NavbarItemProps> = ({
  onClick = () => {},
  iconName = "house",
  label = "",
  isSelected = false,
  isEnabled = true,
  isVisible = true,
  extendedClass = "",
  inlineStyles = {},
}) => {
  if (!isVisible) return null;

  return (
    <div
      className={`navbar-item ${Styles.navbarItem} ${isSelected ? Styles.navbarItemSelected : Styles.navbarItemUnselected}  ${extendedClass}`}
      style={inlineStyles}
      onClick={isEnabled ? onClick : undefined}
    >
      <div className={`navbar-item__icon-div ${Styles.navbarItemIconDiv}`}>
        <i className={`navbar-item__icon fa-${iconName} fa icon ${Styles.navbarItemIcon}`}></i>
      </div>
      <div className={`navbar-item__label-div ${Styles.navbarItemLabelDiv}`}>
        <label className={`navbar-item__label ${Styles.navbarItemLabel}`}>{label}</label>
      </div>
    </div>
  );
};
