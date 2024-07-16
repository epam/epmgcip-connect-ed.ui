"use client";

import { ElementType, HTMLAttributes, useEffect, useRef } from "react";
import cc from "classcat";
import { Title, TitleProps } from "@/components/title/title";
import "./section-base-title.scss";

type SectionBaseTitleProps = Omit<TitleProps, "as"> & {
  level?: number;
};

const getTitleTag = (
  level: number,
): ElementType<
  HTMLAttributes<HTMLHeadingElement>,
  "h1" | "h2" | "h3" | "h4" | "h5"
> => {
  switch (level) {
    case 1:
      return "h1";
    case 2:
      return "h2";
    case 3:
      return "h3";
    case 4:
      return "h4";
    case 5:
      return "h5";
    default:
      return "h3";
  }
};

export const SectionBaseTitle = ({
  className,
  children,
  level = 3,
  ...delegatedProps
}: SectionBaseTitleProps) => {
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
      as={getTitleTag(level)}
      className={cc(["section-base-title", className])}
    >
      {children}
    </Title>
  );
};
