import cc from "classcat";
import { Button, ButtonProps } from "@/components/button/button.tsx";
import { Spinner } from "@/components/spinner/spinner.tsx";
import "./loading-button.scss";

export interface LoadingButtonProps extends ButtonProps {
  isLoading: boolean;
  children?: string | null;
}

export const LoadingButton = ({
  isLoading,
  disabled,
  children,
  className,
  ...delegatedProps
}: LoadingButtonProps) => (
  <Button
    {...delegatedProps}
    className={cc(["loading-button", className])}
    disabled={disabled || isLoading}
  >
    {isLoading && <Spinner className="loading-button-spinner" />}
    <span>{children}</span>
  </Button>
);
