import { HeroArticle } from "@/features/hero-section/hero-article/hero-article.tsx";
import { SectionBase } from "@/components/section-base/section-base.tsx";
import {
  ComponentSharedButton,
  ComponentSharedOverlayBlock,
} from "@/__generated__/graphql.ts";
import "./hero-section.scss";

export interface HeroSectionProps {
  card?: ComponentSharedOverlayBlock | null;
  action?: ComponentSharedButton | null;
  bannerSource?: string;
}

export const HeroSection = ({
  card,
  action,
  bannerSource,
}: HeroSectionProps) => (
  <SectionBase className="hero-section" contentClassName="hero-section-content">
    <HeroArticle card={card} action={action} />
    <div className="hero-section-banner">
      <img
        className="hero-section-banner-image"
        src={bannerSource}
        alt=""
        role="presentation"
      />
    </div>
  </SectionBase>
);
