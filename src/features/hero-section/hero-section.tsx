import {
  HeroArticle,
  HeroArticleVariant,
} from "@/features/hero-section/hero-article/hero-article.tsx";
import "./hero-section.scss";

export interface HeroSectionProps {
  title: string;
  body: string;
  variant?: HeroArticleVariant;
  bannerSource: string;
}

export const HeroSection = ({
  title,
  body,
  bannerSource,
  variant,
}: HeroSectionProps) => (
  <section className="hero-section">
    <HeroArticle title={title} body={body} variant={variant} />
    <div className="hero-section-banner">
      <img
        className="hero-section-banner-image"
        src={bannerSource}
        alt=""
        role="presentation"
      />
    </div>
  </section>
);
