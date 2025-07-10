import type { StandardProps } from "../../Common/Types/standard.types";
import { ReactNode } from "react";

export type AvatarSize = "Small" | "Medium" | "Large";

export interface AvatarProps extends StandardProps {
  isEnabled?: boolean;
  onClick?: () => {};
  children: ReactNode;
  size?: AvatarSize;
  hasBorder?: boolean;
  borderColor?: string;
}
