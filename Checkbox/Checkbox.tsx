import React, { useState, useEffect } from "react";
import styles from "./Checkbox.module.css";

/**
 * Checkbox Component
 * Used primarily as an input for boolean types.
 *
 * @param {object} props - Component props
 * @returns {JSX.Element}
 */

export function Checkbox({ isChecked = false, onChange = () => {}, isEnabled = true, isVisible = true, extendedClass = "", inlineStyles = {} }) {
  const [isChecked, setIsChecked] = useState(false);

  if (!isVisible) return null;
}
