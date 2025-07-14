import type { StandardProps } from "../../Common/Types/standard.types";

export interface RadioButtonProps extends StandardProps {
  isEnabled?: boolean;
  options: string[];
}
