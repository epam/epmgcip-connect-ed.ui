import { ElementType, HTMLAttributes } from "react";
import cc from "classcat";
import "./typography.scss";

export interface TypographyProps extends HTMLAttributes<HTMLParagraphElement> {
  children: string;
  as?: ElementType<HTMLAttributes<HTMLElement>, "p" | "span">;
}

export const Typography = ({
  className,
  as: Tag = "p",
  ...delegatedProps
}: TypographyProps) => (
  <Tag {...delegatedProps} className={cc(["typography", className])} />
);
