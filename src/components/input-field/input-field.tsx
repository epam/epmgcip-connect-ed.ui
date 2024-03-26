import { InputHTMLAttributes, useId } from "react";
import { Input } from "@/components/input/input.tsx";
import { Typography } from "@/components/typography/typography.tsx";
import "./input-field.scss";

export interface InputFieldProps {
  inputProps: InputHTMLAttributes<HTMLInputElement>;
  label: string;
  error?: string;
}

export const InputField = ({ inputProps, label, error }: InputFieldProps) => {
  const uuid = useId();

  return (
    <div className="input-field">
      <label htmlFor={uuid} className="input-field-label">
        <span className="input-field-label-text">{label}</span>
        <Input id={uuid} {...inputProps} />
      </label>
      {error && <Typography className="input-field-error">{error}</Typography>}
    </div>
  );
};
