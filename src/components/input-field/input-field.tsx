import { InputHTMLAttributes, useId } from "react";
import cc from "classcat";
import { Input } from "@/components/input/input.tsx";
import "./input-field.scss";

export interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export const InputField = ({
  label,
  className,
  ...delegatedProps
}: InputFieldProps) => {
  const uuid = useId();

  return (
    <label htmlFor={uuid} className={cc(["input-field-label", className])}>
      <span className="input-field-label-text">{label}</span>
      <Input id={uuid} {...delegatedProps} />
    </label>
  );
};
