import { ActionLink } from "@/components/action-link/action-link.tsx";
import { Title } from "@/components/title/title.tsx";
import { Typography } from "@/components/typography/typography.tsx";
import { getImageBannerTheme } from "@/components/image-banner/utils.ts";
import { ComponentSharedImageCard } from "@/__generated__/graphql.ts";
import "./image-banner.scss";

export interface ImageBannerProps {
  source?: string;
  theme?: string | null;
  card?: ComponentSharedImageCard | null;
}

export const ImageBanner = ({ source, card }: ImageBannerProps) => (
  <section className="image-banner" style={getImageBannerTheme(card)}>
    <div className="image-banner-background">
      <img
        role="presentation"
        alt=""
        src={source}
        className="image-banner-image"
      />
    </div>
    <div className="image-banner-content">
      <div className="image-banner-card">
        <Title className="image-banner-title">{card?.cardHeading}</Title>
        <Typography className="image-banner-body">
          {card?.cardDescription}
        </Typography>
        <ActionLink
          to={`/${card?.linkUrl}`}
          className="image-banner-action"
          target={card?.linkNewTab ? "_blank" : undefined}
          // TODO: change after clarification regarding button theming
          // theme={theme}
        >
          {card?.linkText}
        </ActionLink>
      </div>
    </div>
  </section>
);
