import { ButtonHTMLAttributes, forwardRef } from "react";
import cc from "classcat";
import { getThemeStyle } from "@/utils/get-theme-style.ts";
import { ButtonTheme, Maybe } from "@/__generated__/graphql.ts";
import "./button.scss";

export type ButtonVariant = "main" | "inverted" | "outline" | "nav" | "form";
/*
*   --supernova: #000;
  --light: #fff;
  --fire: #CD2026;
  --white: #fff;
  --black: #002F3F;
  --background: #F8F5F1;
  --primary: #0E7C73;
  --secondary: #97CAEF;
  --tertiary: #973CEF;
  *
  *   | 'background'
  | 'black'
  | 'primary'
  | 'quaternary'
  | 'quinary'
  | 'secondary'
  | 'tertiary'
  | 'white';
* */
export interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "style"> {
  variant?: ButtonVariant;
  theme?: Maybe<ButtonTheme>;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ type, variant = "main", className, theme, ...delegatedProps }, ref) => (
    <button
      {...delegatedProps}
      type={type}
      ref={ref}
      style={getThemeStyle([
        ["--main-color", theme?.BackgrondColor],
        ["--border-color", theme?.OutlineColor],
        ["--color", theme?.FontColor],
      ])}
      className={cc(["button", variant, className])}
    />
  ),
);
