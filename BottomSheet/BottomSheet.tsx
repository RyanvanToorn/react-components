import React, { useEffect, useState } from "react";
import Styles from "./BottomSheet.module.css";
import type { BottomSheetProps } from "./BottomSheet.types";

/**
 * BottomSheet Component
 * Used for displaying content in a popup view stemming from the bottom of the screen.
 *
 * @param {object} props - Component props
 * @returns {JSX.Element}
 */

export const BottomSheet: React.FC<BottomSheetProps> = ({
  isOpen = false,
  headerContent = [],
  content = [],
  footerContent = [],
  hasCloseButton = true,
  isVisible = true,
  extendedClass = "",
  inlineStyles = {},
}) => {
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(isOpen);

  useEffect(() => {
    setIsBottomSheetOpen(isOpen);
  }, [isOpen]);

  function closeBottomSheet() {
    setIsBottomSheetOpen(false);
  }

  if (!isVisible || !isBottomSheetOpen) return null;

  return (
    <div className={`${Styles.BottomSheet} bottom-sheet ${extendedClass} ${isOpen ? Styles.BottomSheetOpen : Styles.BottomSheetClosed}`} style={inlineStyles}>
      <div className={Styles.BottomSheetHeader}>
        <div className={Styles.BottomSheetCloseButton}> X </div>
        {headerContent}
      </div>
      <div className={Styles.BottomSheetContent}>{content}</div>
      <div className={Styles.BottomSheetFooter}>{footerContent}</div>
    </div>
  );
};
