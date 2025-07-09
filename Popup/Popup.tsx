import React, { useState, useEffect } from "react";
import Styles from "./Popup.module.css";
import * as types from "./Popup.types";

/**
 * Popup Component
 * Used for displaying content in a popup form.
 *
 * @param {object} props - Component props
 * @returns {JSX.Element}
 */

export const Popup: React.FC<types.PopupProps> = ({
  isOpen = false,
  title = "",
  subtitle = "",
  bodyContents = null,
  footerContents = null,
  showCloseButton = true,
  isVisible = true,
  extendedClass = "",
  inlineStyles = {},
}) => {
  const [isPopupOpen, setIsOpen] = useState(isOpen);

  useEffect(() => {
    setIsOpen(isOpen);
  }, [isOpen]);

  if (!isVisible || !isPopupOpen) {
    return null;
  }

  function closePopup() {
    setIsOpen(false);
  }

  return (
    <div>
      <div className={`popup-backdrop ${Styles.PopupBackdrop}`}></div>
      <div className={`popup ${Styles.Popup} ${extendedClass}`} style={inlineStyles}>
        <PopupHeader title={title} subtitle={subtitle} showCloseButton={showCloseButton} onClose={closePopup} />
        <PopupContent bodyContents={bodyContents} />
        <PopupFooter footerContents={footerContents} />
      </div>
    </div>
  );
};

/* ===== Sub Components ===== */

const PopupHeader: React.FC<types.PopupHeaderProps> = ({ title = "", subtitle = "", onClose, showCloseButton }) => {
  return (
    <div className={`popup-header ${Styles.PopupHeader}`}>
      <div className={`${Styles.PopupHeaderLayoutContainerLeft} `}>
        <div className={`popup-header__title ${Styles.PopupHeaderTitle}`}>{title}</div>
        <div className={`popup-header__subtitle ${Styles.PopupHeaderSubtitle}`}>{subtitle}</div>
      </div>
      <div className={`${Styles.PopupHeaderLayoutContainerRight} `}>
        <CloseButton onClose={onClose} isVisible={showCloseButton} />
      </div>
    </div>
  );
};

const PopupContent: React.FC<types.PopupContentProps> = ({ bodyContents = null }) => {
  return <div className={`popup-content ${Styles.PopupContent}`}>{bodyContents}</div>;
};

const PopupFooter: React.FC<types.PopupFooterProps> = ({ footerContents }) => {
  return <div className={`popup-footer ${Styles.PopupFooter}`}>{footerContents}</div>;
};

const CloseButton: React.FC<types.CloseButtonProps> = ({ onClose, isVisible = false }) => {
  if (!isVisible) return null;

  return (
    <button className={`popup-close-button ${Styles.CloseButton}`} onClick={onClose}>
      ❌
    </button>
  );
};

const ExpandButton: React.FC<types.ExpandButtonProps> = ({ onExpand = () => {}, isVisible = false }) => {
  if (!isVisible) return null;

  return (
    <button className={`popup-close-button ${Styles.CloseButton}`} onClick={onExpand}>
      ❌
    </button>
  );
};
