import type { StandardProps } from "../../Common/Types/standard.types";

export type ToastType = "Success" | "Warning" | "Error" | "Information";

export interface ToastProps extends StandardProps {
  message: string;
  type?: ToastType;
  duration?: number;
  onClose?: () => void;
}
