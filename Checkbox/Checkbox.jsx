import React, { useState, useEffect } from "react";
import styles from "./Checkbox.module.css";

export function Checkbox({ isChecked = false, onChange = () => {}, isEnabled = true, isVisible = true, extendedClass = "", inlineStyles = {} }) {
  const [isChecked, setIsChecked] = useState(false);

  if (!isVisible) return null;
}
