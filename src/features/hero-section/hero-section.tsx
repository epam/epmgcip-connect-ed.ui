import { HeroArticle } from "@/features/hero-section/hero-article/hero-article.tsx";
import { SectionBase } from "@/components/section-base/section-base.tsx";
import { HeroBannerFragmentFragment } from "@/__generated__/graphql.ts";
import "./hero-section.scss";

export interface HeroSectionProps {
  data: HeroBannerFragmentFragment;
}

export const HeroSection = ({
  data: { CTA: action, Image: coverImage, OverlayBlock: card },
}: HeroSectionProps) => (
  <SectionBase className="hero-section" contentClassName="hero-section-content">
    <HeroArticle card={card} action={action} />
    <div className="hero-section-banner">
      <img
        className="hero-section-banner-image"
        src={coverImage?.data?.attributes?.url ?? ""}
        alt=""
        role="presentation"
      />
    </div>
  </SectionBase>
);
