import React, { useState, useEffect } from "react";
import Styles from "./Navbar.module.css";
import { NavbarItem } from "./NavbarItem";
import type { NavbarProps } from "./Navbar.types";

/**
 * Dynamic Navbar Component for responsive devices
 * Used for displaying various menu items (NavbarItems) on the side or bottom of the screen depending on the device type.
 *
 * @param {object} props - Component props
 * @returns {JSX.Element}
 */

export const Navbar: React.FC<NavbarProps> = ({ items = [], defaultItem = "", isVisible = true, extendedClass = "", inlineStyles = {} }) => {
  const [activeItem, setActiveItem] = useState(() => {
    if (!defaultItem) return undefined;
    return items.find((item) => item.key === defaultItem);
  });

  const [responsiveClass, setResponsiveClass] = useState(Styles.navbarDesktop);

  useEffect(() => {
    function updateResponsiveClass() {
      if (window.innerWidth < 640) {
        setResponsiveClass(Styles.navbarPhone);
      } else if (window.innerWidth < 1024) {
        setResponsiveClass(Styles.navbarTablet);
      } else {
        setResponsiveClass(Styles.navbarDesktop);
      }
    }
    updateResponsiveClass();
    window.addEventListener("resize", updateResponsiveClass);
    return () => window.removeEventListener("resize", updateResponsiveClass);
  }, []);

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  if (!isVisible) return null;

  return (
    <div className={`navbar ${responsiveClass} ${Styles.navbar} ${extendedClass}`} style={inlineStyles}>
      <div className={`navbar__items-div ${Styles.navbarItemsDiv}`}>
        {items.map((item) => (
          <NavbarItem
            key={item.key}
            onClick={() => handleItemClick(item)}
            iconName={item.iconName}
            label={item.label}
            isSelected={item === activeItem}
            isEnabled={item.isEnabled}
            isVisible={item.isVisible}
            extendedClass={item.extendedClass}
            inlineStyles={item.inlineStyles}
          ></NavbarItem>
        ))}
      </div>
    </div>
  );
};
