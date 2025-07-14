import type { StandardProps } from "../../Common/Types/standard.types";

export interface TextAreaProps extends StandardProps {
  value?: string;
  isResizable?: boolean;
  isEnabled?: boolean;
  rows?: number;
  onChange?: () => {};
}
