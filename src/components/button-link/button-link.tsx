import { AnchorHTMLAttributes, forwardRef } from "react";
import cc from "classcat";
import Link, { LinkProps } from "next/link";
import { getThemeStyle } from "@/utils/get-theme-style.ts";
import { ButtonTheme, Maybe } from "@/__generated__/graphql.ts";
import "./button-link.scss";

export type ButtonLinkVariant =
  | "main"
  | "inverted"
  | "outline"
  | "nav"
  | "form";

interface LinkElementProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: ButtonLinkVariant;
  theme?: Maybe<Omit<ButtonTheme, "documentId">>;
}

export type ButtonLinkProps = LinkProps & LinkElementProps;

const getPalette = (theme?: Maybe<Omit<ButtonTheme, "documentId">>) =>
  getThemeStyle([
    ["--main-color", theme?.BackgrondColor ?? "primary"],
    ["--border-color", theme?.OutlineColor ?? "primary"],
    ["--color", theme?.FontColor ?? "white"],
  ]);

export const ButtonLink = forwardRef<HTMLAnchorElement, ButtonLinkProps>(
  ({ variant = "main", className, theme, ...delegatedProps }, ref) => (
    <Link
      {...delegatedProps}
      ref={ref}
      style={getPalette(theme)}
      className={cc(["button-link", variant, className])}
    />
  ),
);
