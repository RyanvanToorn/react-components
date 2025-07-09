import type { StandardProps } from "../../Common/Types/standard.types";

export interface ChipProps extends StandardProps {
  text: string;
  onClick: () => void;
  isEnabled?: boolean;
}
