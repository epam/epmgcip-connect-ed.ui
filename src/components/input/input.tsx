import { ForwardedRef, forwardRef, InputHTMLAttributes } from "react";
import cc from "classcat";
import "./input.scss";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export const Input = forwardRef(
  (
    { className, ...delegatedProps }: InputProps,
    ref: ForwardedRef<HTMLInputElement>,
  ) => (
    <input {...delegatedProps} className={cc(["input", className])} ref={ref} />
  ),
);
