import React from "react";
import Styles from "./Icon.module.css";
import type { IconProps } from "./Icon.types";

/**
 * Icon Component
 * Used for displaying icons - uses the Font Awesome library icons by default.
 *
 * @param {object} props - Component props
 * @returns {JSX.Element}
 */

export const Icon: React.FC<IconProps> = ({ icon = "search", isVisible = true, extendedClass = "", inlineStyles = {} }) => {
  if (!isVisible) return null;

  return <i className={`icon fa fa-${icon} ${Styles.icon} ${extendedClass}`} aria-hidden="true" style={inlineStyles} />;
};
