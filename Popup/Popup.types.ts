import type { StandardProps } from "../../Common/Types/standard.types";
import type { ReactNode } from "react";

export interface PopupProps extends StandardProps {
  isOpen?: boolean;
  title?: string;
  subtitle?: string;
  bodyContents?: ReactNode;
  footerContents?: ReactNode;
  showCloseButton?: boolean;
}

export interface PopupHeaderProps {
  title?: string;
  subtitle?: string;
  onClose: () => void;
  showCloseButton?: boolean;
}

export interface PopupContentProps {
  bodyContents?: ReactNode;
}

export interface PopupFooterProps {
  footerContents?: ReactNode;
}

export interface ExpandButtonProps {
  onExpand: () => void;
  isVisible?: boolean;
}

export interface CloseButtonProps {
  onClose: () => void;
  isVisible?: boolean;
}
