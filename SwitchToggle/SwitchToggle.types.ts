import type { StandardProps } from "../../Common/Types/standard.types";

export interface SwitchToggleProps extends StandardProps {
  defaultChecked?: boolean;
  onToggle: (boolean) => void;
}
