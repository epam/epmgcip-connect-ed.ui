import { ElementType, HTMLAttributes, PropsWithChildren } from "react";
import cc from "classcat";
import "./typography.scss";

export interface TypographyProps extends HTMLAttributes<HTMLParagraphElement> {
  as?: ElementType<HTMLAttributes<HTMLElement>, "p" | "span">;
}

export const Typography = ({
  className,
  as: Tag = "p",
  ...delegatedProps
}: PropsWithChildren<TypographyProps>) => (
  <Tag {...delegatedProps} className={cc(["typography", className])} />
);
