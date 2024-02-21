import { ReactNode } from "react";
import cc from "classcat";
import { Link } from "react-router-dom";
import "./text.scss";

export type TextVariant = "link" | "name" | "title" | "text" | "default";

export interface IProps {
  variant: TextVariant;
  className: string;
  children: string | ReactNode;
  link: string;
}

export const Text = ({
  variant = "default",
  className,
  children,
  link,
}: IProps) => {
  switch (variant) {
    case "link":
      return (
        <Link to={link} className={cc(["text", variant, className])}>
          {children}
        </Link>
      );
    case "name":
      return (
        <span className={cc(["text", variant, className])}>{children}</span>
      );
    case "title":
      return <h1 className={cc(["text", variant, className])}>{children}</h1>;
    case "text":
      return <p className={cc(["text", variant, className])}>{children}</p>;
    case "default":
      return <div className={cc(["text", variant, className])}>{children}</div>;
    default:
      return <div className={cc(["text", variant, className])}>{children}</div>;
  }
};
