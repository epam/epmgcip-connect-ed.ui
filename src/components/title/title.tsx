import { ElementType, forwardRef, HTMLAttributes, ReactNode } from "react";
import cc from "classcat";
import { Enum_Title_Headinglevel } from "@/__generated__/graphql.ts";
import "./title.scss";

export type TitleTheme = "inherit" | "black" | "white";
export type TitleLevel = Enum_Title_Headinglevel | null | undefined;

export interface TitleProps {
  theme?: TitleTheme;
  className?: string;
  children: ReactNode;
  level?: TitleLevel;
  align?: "left" | "center";
}

const getTitleTag = (
  level?: TitleLevel,
): ElementType<
  HTMLAttributes<HTMLHeadingElement>,
  "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
> => {
  switch (level) {
    case "h1":
    case "h2":
    case "h3":
    case "h4":
    case "h5":
    case "h6":
      return level;
    default:
      return "h3";
  }
};

export const Title = forwardRef<HTMLHeadingElement, TitleProps>(
  (
    { className, children, theme = "inherit", level = "h3", align }: TitleProps,
    ref,
  ) => {
    const Tag = getTitleTag(level);

    return (
      <Tag
        ref={ref}
        className={cc([
          "title",
          align === "center" && "title-center",
          className,
        ])}
        data-theme={theme}
      >
        {children}
      </Tag>
    );
  },
);
