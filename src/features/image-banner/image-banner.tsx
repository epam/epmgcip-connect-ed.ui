import { ActionLink } from "@/components/action-link/action-link.tsx";
import { Title } from "@/components/title/title.tsx";
import { Typography } from "@/components/typography/typography.tsx";
import { getImageBannerTheme } from "@/features/image-banner/utils.ts";
import { ImageBannerFragmentFragment } from "@/__generated__/graphql.ts";
import "./image-banner.scss";

export interface ImageBannerProps {
  data: ImageBannerFragmentFragment;
}

// eslint-disable-next-line complexity
export const ImageBanner = ({ data }: ImageBannerProps) => {
  const card = data?.imageCard;
  return (
    <section
      className="image-banner"
      style={getImageBannerTheme(data.Theme?.data?.attributes)}
    >
      <div className="image-banner-background">
        <img
          role="presentation"
          alt=""
          src={data?.Image?.data?.attributes?.url ?? ""}
          className="image-banner-image"
        />
      </div>
      <div className="image-banner-content">
        <div className="image-banner-card">
          <Title
            level={card?.Title?.data?.attributes?.HeadingLevel}
            className="image-banner-title"
          >
            {card?.Title?.data?.attributes?.Title}
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
