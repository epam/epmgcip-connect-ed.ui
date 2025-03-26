"use client";

import { Button } from "@/components/button/button.tsx";
import { Title } from "@/components/title/title.tsx";
import { SectionBase } from "@/components/section-base";
import "./error-section.scss";

export const ErrorSection = () => {
  const handleClick = () => {
    window?.location.reload();
  };

  return (
    <SectionBase
      className="error-section"
      contentClassName="error-section-content"
    >
      <Title level="h1" className="error-section-title">
        Something went wrong!
      </Title>
      <Button className="error-section-action" onClick={handleClick}>
        Reload
      </Button>
    </SectionBase>
  );
};
