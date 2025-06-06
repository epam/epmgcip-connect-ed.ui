import { ActionLink } from "@/components/action-link/action-link.tsx";
import { Title } from "@/components/title/title.tsx";
import { Typography } from "@/components/typography/typography.tsx";
import { getImageBannerTheme } from "@/features/image-banner/utils.ts";
import { ImageBannerFragmentFragment } from "@/__generated__/graphql.ts";
import "./image-banner.scss";

export interface ImageBannerProps {
  data: ImageBannerFragmentFragment;
}

export const ImageBanner = ({ data }: ImageBannerProps) => {
  const card = data?.imageCard;
  return (
    <section className="image-banner" style={getImageBannerTheme(data.Theme)}>
      <div className="image-banner-background">
        <img
          role="presentation"
          alt=""
          src={data?.Image?.url ?? ""}
          className="image-banner-image"
        />
      </div>
      <div className="image-banner-content">
        <div className="image-banner-card">
          <Title
            level={card?.Title?.HeadingLevel}
            className="image-banner-title"
          >
            {card?.Title?.Title}
          </Title>
          <Typography className="image-banner-body">{card?.Text}</Typography>
          <ActionLink
            href={`/${card?.URL}`}
            className="image-banner-action"
            target={card?.Open ? "_blank" : undefined}
            // TODO: change after clarification regarding button theming
            // theme={theme}
          >
            {card?.LinkTitle}
          </ActionLink>
        </div>
      </div>
    </section>
  );
};
