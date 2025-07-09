import type { StandardProps } from "../../Common/Types/standard.types";

export interface ProgressBarProps extends StandardProps {
  progress: number; //Should be between 0-100, effectively a percentage
}
