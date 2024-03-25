import { CSSProperties } from "react";
import "./partners-carousel.scss";

interface PartnersCarouselProps {
  items: string[];
  speed?: string;
}

export const PartnersCarousel = ({ items, speed }: PartnersCarouselProps) => {
  const styles = speed
    ? ({
        "--animation-speed": `${speed}s`,
      } as CSSProperties)
    : undefined;

  return (
    <div className="partners-carousel" style={styles}>
      <ul className="partners-carousel-list">
        {items.map(url => (
          <li key={url} className="partners-carousel-item">
            <a href="/public">
              <img
                src={url}
                className="partners-carousel-image"
                alt="partner"
              />
            </a>
          </li>
        ))}
        {items.map(url => (
          <li
            key={`${url}-copy`}
            className="partners-carousel-item"
            aria-hidden
          >
            <a href="/public">
              <img
                src={url}
                className="partners-carousel-image"
                alt="partner"
              />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
