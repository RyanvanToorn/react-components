import type { StandardProps } from "../../Common/Types/standard.types";

export type AlertType = "Success" | "Warning" | "Error" | "Information";

export interface AlertProps extends StandardProps {
  message: string;
  type?: AlertType;
  duration?: number;
}
