"use client";

import { useEffect, useRef } from "react";
import cc from "classcat";
import { Title, TitleProps, TitleLevel } from "@/components/title/title";
import "./section-base-title.scss";

type SectionBaseTitleProps = Omit<TitleProps, "as"> & {
  level?: TitleLevel | null;
};

export const SectionBaseTitle = ({
  className,
  children,
  align,
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
      align={align}
      className={cc([
        "section-base-title",
        align === "center" && "section-base-title-center",
        className,
      ])}
    >
      {children}
    </Title>
  );
};
