import type { StandardProps } from "../../Common/Types/standard.types";
import { ReactNode } from "react";

export type ButtonType = "button" | "reset" | "submit";

export interface ButtonProps extends StandardProps {
  children?: ReactNode;
  isEnabled?: boolean;
  onClick: () => {};
  type?: ButtonType;
}

export interface SplitButtonProps extends StandardProps {
  children?: ReactNode;
  isEnabled?: boolean;
  onClick: () => {};
}
