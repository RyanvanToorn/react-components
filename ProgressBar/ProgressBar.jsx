import React from "react";
import styles from "./ProgressBar.module.css";

export default function ProgressBar({ isVisible = true, extendedClass = "", inlineStyles = {} }) {
  if (!isVisible) return null;

  return <div className={`progess-bar ${styles.ProgressBar}`}></div>;
}
