import type { StandardProps } from "../../Common/Types/standard.types";
import type { ReactNode } from "react";

export interface TabProps extends StandardProps {
  headers: TabHeaderProps[];
  items: TabItemProps[];
  isVertical?: boolean;
  defaultTab?: number;
}

export interface TabHeaderProps extends StandardProps {
  title: string;
  isCurrentTab?: boolean;
  onClick: () => void;
  isEnabled?: boolean;
}

export interface TabItemProps extends StandardProps {
  isCurrentTab?: boolean;
  content: ReactNode;
}
