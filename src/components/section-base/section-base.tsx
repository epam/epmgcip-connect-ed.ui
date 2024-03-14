import { HTMLAttributes, ReactNode, useEffect, useRef } from "react";
import cc from "classcat";
import { Title, TitleProps } from "@/components/title/title.tsx";
import "./section-base.scss";

export interface SectionBaseProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
}

const SectionBaseComponent = ({
  children,
  className,
  ...delegatedProps
}: SectionBaseProps) => (
  <section {...delegatedProps} className={cc(["section-base", className])}>
    {children}
  </section>
);

SectionBaseComponent.Title = function SectionBaseTitle({
  className,
  children,
  ...delegatedProps
}: TitleProps) {
  const ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        const fullWidthClassName = "section-base-full-underline";
        const hasFullUnderline =
          entry.target.classList.contains(fullWidthClassName);

        if (entry.isIntersecting && !hasFullUnderline) {
          entry.target.classList.add(fullWidthClassName);
        }
      },
      { rootMargin: "0px 0px -72px 0px" },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <Title
      ref={ref}
      {...delegatedProps}
      className={cc(["section-base-title", className])}
    >
      {children}
    </Title>
  );
};

export const SectionBase = SectionBaseComponent;
