import { ButtonHTMLAttributes, forwardRef } from "react";
import cc from "classcat";
import "./button.scss";

export type ButtonVariant = "main" | "inverted" | "outline" | "nav" | "form";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ type, variant = "primary", className, ...delegatedProps }, ref) => (
    <button
      {...delegatedProps}
      type={type}
      ref={ref}
      className={cc(["button", variant, className])}
    />
  ),
);
