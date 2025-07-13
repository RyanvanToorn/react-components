import type { StandardProps } from "../../Common/Types/standard.types";
import type { ReactNode } from "react";

export interface BottomSheetProps extends StandardProps {
  isOpen?: boolean;
  onClose?: () => {};
  hasCloseButton?: boolean;
  headerContent?: ReactNode;
  content?: ReactNode;
  footerContent?: ReactNode;
}
