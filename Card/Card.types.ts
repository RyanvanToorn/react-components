import type { StandardProps } from "../../Common/Types/standard.types";
import type { ReactNode, CSSProperties } from "react";

export interface CardProps extends StandardProps {
  header?: ReactNode;
  footer?: ReactNode;
  children: React.ReactNode;
  isVisible?: boolean;
  extendedClass?: string;
  inlineStyles?: CSSProperties;
}
