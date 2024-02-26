import { ReactNode } from "react";
import cc from "classcat";
import "./text.scss";

export type TextVariant = "link" | "title" | "paragraph" | "small" | "default";
export type TextColor =
  | "primary"
  | "secondary"
  | "tertiary"
  | "black"
  | "white";

export interface IProps {
  variant?: TextVariant;
  className?: string;
  children: string | ReactNode;
  link?: string;
  headingLevel?: keyof JSX.IntrinsicElements;
  color?: TextColor;
}

export const Text = ({
  variant = "default",
  className,
  children,
  link,
  headingLevel = "h2",
  color = "black",
}: IProps) => {
  const commonProps = {
    className: cc(["text", variant, headingLevel, className, color]),
    children,
  };

  switch (variant) {
    case "link":
      return link ? (
        // eslint-disable-next-line jsx-a11y/anchor-has-content
        <a href={link} {...commonProps} />
      ) : (
        <span {...commonProps} />
      );
    case "title":
      const HeadingComponent: React.ElementType = headingLevel;
      return (
        <HeadingComponent
          className={cc(["text", variant, headingLevel, color, className])}
        >
          <span>{children}</span>
        </HeadingComponent>
      );
    case "paragraph":
      return <p {...commonProps} />;
    case "small":
      return <p {...commonProps} />;
    case "default":
      return <div {...commonProps} />;
    default:
      return <div {...commonProps} />;
  }
};
