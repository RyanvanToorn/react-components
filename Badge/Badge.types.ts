import type { StandardProps } from "../../Common/Types/standard.types";
import type { ReactNode } from "react";

export interface BadgeProps extends StandardProps {
  children: ReactNode;
  count: number;
}
