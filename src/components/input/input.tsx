import { ForwardedRef, forwardRef, InputHTMLAttributes } from "react";
import "./input.scss";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export const Input = forwardRef(
  (
    { className, ...delegatedProps }: InputProps,
    ref: ForwardedRef<HTMLInputElement>,
  ) => <input {...delegatedProps} className={`input ${className}`} ref={ref} />,
);
