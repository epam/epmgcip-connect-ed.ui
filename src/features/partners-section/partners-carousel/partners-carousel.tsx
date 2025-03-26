import { CSSProperties } from "react";
import { ComponentSharedImage } from "@/__generated__/graphql.ts";
import "./partners-carousel.scss";

interface PartnersCarouselProps {
  items: ComponentSharedImage[];
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
        {items.map(item => (
          <li key={item.id} className="partners-carousel-item">
            <a href={item.URL ?? ""}>
              <img
                src={item.Image?.data?.attributes?.url ?? ""}
                className="partners-carousel-image"
                alt={item.AltText ?? ""}
              />
            </a>
          </li>
        ))}
        {items.map(item => (
          <li
            key={`${item.id}-copy`}
            className="partners-carousel-item"
            aria-hidden
          >
            <a href={item.URL ?? ""}>
              <img
                src={item.Image?.data?.attributes?.url ?? ""}
                className="partners-carousel-image"
                alt={item.AltText ?? ""}
              />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
