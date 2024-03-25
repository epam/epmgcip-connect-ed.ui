import { ElementType, forwardRef, HTMLAttributes, ReactNode } from "react";
import cc from "classcat";
import "./title.scss";

export type TitleTheme = "inherit" | "black" | "white";

export interface TitleProps {
  theme?: TitleTheme;
  className?: string;
  children: ReactNode;
  as?: ElementType<
    HTMLAttributes<HTMLHeadingElement>,
    "h1" | "h2" | "h3" | "h4" | "h5"
  >;
}

export const Title = forwardRef<HTMLHeadingElement, TitleProps>(
  (
    { className, children, theme = "inherit", as: Tag = "h2" }: TitleProps,
    ref,
  ) => (
    <Tag ref={ref} className={cc(["title", className])} data-theme={theme}>
      {children}
    </Tag>
  ),
);
