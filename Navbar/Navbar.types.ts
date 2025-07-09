import type { StandardProps } from "../../Common/Types/standard.types";

export interface NavbarProps extends StandardProps {
  items: NavbarItemProps[];
  defaultItem: number;
}

export interface NavbarItemProps extends StandardProps {
  key: number;
  onClick: () => void;
  iconName: string;
  label: string;
  isSelected?: boolean;
  isEnabled?: boolean;
}
