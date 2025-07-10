import type { StandardProps } from "../../Common/Types/standard.types";
import type { ReactNode } from "react";

export interface ModalProps extends StandardProps {
  isOpen?: boolean;
  title?: string;
  subtitle?: string;
  bodyContents?: ReactNode;
  footerContents?: ReactNode;
  showCloseButton?: boolean;
}

export interface ModalHeaderProps {
  title?: string;
  subtitle?: string;
  onClose: () => void;
  showCloseButton?: boolean;
}

export interface ModalContentProps {
  bodyContents?: ReactNode;
}

export interface ModalFooterProps {
  footerContents?: ReactNode;
}

export interface CloseButtonProps {
  onClose: () => void;
  isVisible?: boolean;
}
