import { AnchorHTMLAttributes, forwardRef } from "react";
import cc from "classcat";
import { Link, type LinkProps } from "react-router-dom";
import "./button-link.scss";

export type ButtonLinkVariant =
  | "main"
  | "inverted"
  | "outline"
  | "nav"
  | "form";
export type ButtonLinkTheme = "primary" | "secondary" | "tertiary";

interface LinkElementProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: ButtonLinkVariant;
  theme?: ButtonLinkTheme;
}

export type ButtonLinkProps = LinkProps & LinkElementProps;

export const ButtonLink = forwardRef<HTMLAnchorElement, ButtonLinkProps>(
  (
    { variant = "main", className, theme = "primary", ...delegatedProps },
    ref,
  ) => (
    <Link
      {...delegatedProps}
      ref={ref}
      data-theme={theme}
      className={cc(["button-link", variant, className])}
    />
  ),
);
