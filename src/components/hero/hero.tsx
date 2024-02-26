import {
  HeroArticle,
  HeroArticleVariant,
} from "@/components/hero/hero-article/hero-article.tsx";
import "./hero.scss";

export interface HeroProps {
  title: string;
  body: string;
  variant?: HeroArticleVariant;
  bannerSource: string;
}

export const Hero = ({ title, body, bannerSource, variant }: HeroProps) => (
  <section className="hero">
    <HeroArticle title={title} body={body} variant={variant} />
    <div className="hero-banner">
      <img
        className="hero-banner-image"
        src={bannerSource}
        alt=""
        role="presentation"
      />
    </div>
  </section>
);
