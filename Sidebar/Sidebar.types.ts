import type { StandardProps } from "../../Common/Types/standard.types";
import type { ReactNode } from "react";

export interface SidebarProps extends StandardProps {
  isOpen?: boolean;
  isExpanded?: boolean;
  onExpand?: () => {};
  onClose?: () => {};
  children: ReactNode;
}

export interface SidebarHeaderProps extends StandardProps {}

export interface SidebarFooterProps extends StandardProps {}
