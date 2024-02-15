import { ButtonHTMLAttributes, forwardRef } from "react";
import "./button.css";

export type ButtonVariant =
  | "primary"
  | "secondary"
  | "outline"
  | "nav"
  | "pale";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ type, variant = "primary", className, ...delegatedProps }, ref) => {
    const styleBase = `button ${variant}`; // TODO: change after css approach is defined (clsx)

    return (
      <button
        {...delegatedProps}
        type={type}
        ref={ref}
        className={className ? `${styleBase} ${className}` : styleBase}
      />
    );
  },
);
