import React, { useState, useEffect } from "react";
import Styles from "./Modal.module.css";
import * as types from "./Modal.types";

/**
 * Modal Component
 * Used for displaying content in a popup form whilst disabling further actions and hiding/dimming the background.
 *
 * @param {object} props - Component props
 * @returns {JSX.Element}
 */

export const Modal: React.FC<types.ModalProps> = ({
  isOpen = false,
  title = "",
  bodyContents = null,
  footerContents = null,
  showCloseButton = true,
  isVisible = true,
  extendedClass = "",
  inlineStyles = {},
}) => {
  const [isModalOpen, setIsOpen] = useState(isOpen);

  useEffect(() => {
    setIsOpen(isOpen);
  }, [isOpen]);

  if (!isVisible || !isModalOpen) {
    return null;
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <div className={`modal-backdrop ${Styles.ModalBackdrop}`}></div>
      <div className={`modal ${Styles.Modal} ${extendedClass}`} style={inlineStyles}>
        <ModalHeader title={title} showCloseButton={showCloseButton} onClose={closeModal} />
        <ModalContent bodyContents={bodyContents} />
        <ModalFooter footerContents={footerContents} />
      </div>
    </div>
  );
};

/* ===== Sub Components ===== */

const ModalHeader: React.FC<types.ModalHeaderProps> = ({ title = "", subtitle = "", onClose, showCloseButton }) => {
  return (
    <div className={`modal-header ${Styles.ModalHeader}`}>
      <div className={`${Styles.ModalHeaderLayoutContainerLeft} `}>
        <div className={`modal-header__title ${Styles.ModalHeaderTitle}`}>{title}</div>
      </div>
      <div className={`${Styles.ModalHeaderLayoutContainerRight} `}>
        <CloseButton onClose={onClose} isVisible={showCloseButton} />
      </div>
    </div>
  );
};

const ModalContent: React.FC<types.ModalContentProps> = ({ bodyContents = null }) => {
  return <div className={`modal-content ${Styles.ModalContent}`}>{bodyContents}</div>;
};

const ModalFooter: React.FC<types.ModalFooterProps> = ({ footerContents }) => {
  return <div className={`modal-footer ${Styles.ModalupFooter}`}>{footerContents}</div>;
};

const CloseButton: React.FC<types.CloseButtonProps> = ({ onClose, isVisible = false }) => {
  if (!isVisible) return null;

  return (
    <button className={`modal-close-button ${Styles.CloseButton}`} onClick={onClose}>
      ❌
    </button>
  );
};
