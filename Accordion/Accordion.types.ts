import type { StandardProps } from "../../Common/Types/standard.types";

export interface AccordionProps extends StandardProps {
  items: AccordionItemProps[];
  isExpandAllVisible?: boolean;
  isExpandAllEnabled?: boolean;
}

export interface AccordionItemProps extends StandardProps {
  key: number;
  title: string;
  subtitle?: string;
  content?: React.ReactNode;
  isExpanded?: boolean;
  isEnabled?: boolean;
  startExpanded?: boolean;
  onToggle?: () => void;
}
