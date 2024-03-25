import { ButtonHTMLAttributes, forwardRef } from "react";
import cc from "classcat";
import "./button.scss";

export type ButtonVariant = "main" | "inverted" | "outline" | "nav" | "form";
export type ButtonTheme = "primary" | "secondary" | "tertiary";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  theme?: ButtonTheme;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { type, variant = "main", className, theme = "primary", ...delegatedProps },
    ref,
  ) => (
    <button
      {...delegatedProps}
      type={type}
      ref={ref}
      data-theme={theme}
      className={cc(["button", variant, className])}
    />
  ),
);
