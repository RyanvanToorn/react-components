import type { StandardProps } from "../../Common/Types/standard.types";

export interface CheckboxProps extends StandardProps {
  isChecked: boolean;
  isEnabled?: boolean;
  onChange: (checked: boolean) => void;
}
