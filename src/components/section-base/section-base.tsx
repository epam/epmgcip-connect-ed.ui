import { ReactNode } from "react";
import cc from "classcat";
import { Title, TitleProps } from "@/components/title/title.tsx";
import "./section-base.scss";

export interface SectionBaseProps {
  children: ReactNode;
  className?: string;
}

const SectionBaseComponent = ({ children, className }: SectionBaseProps) => (
  <section className={cc(["section-base", className])}>{children}</section>
);

SectionBaseComponent.Title = function ({
  className,
  children,
  ...delegatedProps
}: TitleProps) {
  return (
    <Title
      {...delegatedProps}
      className={cc(["section-base-title", className])}
    >
      {children}
    </Title>
  );
};

export const SectionBase = SectionBaseComponent;
