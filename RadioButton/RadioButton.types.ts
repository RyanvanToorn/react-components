import type { StandardProps } from "../../Common/Types/standard.types";

export interface RadioButtonItemProps extends StandardProps {
  value: string;
  label: string;
}

export interface RadioButtonProps extends StandardProps {
  items: RadioButtonItemProps[];
  isEnabled?: boolean;
  isVisible?: boolean;
  name?: string;
  selectedValue?: string;
  onChange?: (value: string) => void;
  extendedClass?: string;
  inlineStyles?: React.CSSProperties;
}
