import type { StandardProps } from "../../Common/Types/standard.types";
import type { ReactNode, CSSProperties } from "react";

export interface CardProps extends StandardProps {
  headerContents?: ReactNode;
  bodyContents?: ReactNode;
  footerContents?: ReactNode;
  isVisible?: boolean;
  extendedClass?: string;
  inlineStyles?: CSSProperties;
}
