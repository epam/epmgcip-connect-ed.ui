import { ActionLink } from "@/components/action-link/action-link.tsx";
import { Title } from "@/components/title/title.tsx";
import { Typography } from "@/components/typography/typography.tsx";
import "./image-banner.scss";

export interface ImageBannerProps {
  source: string;
  title: string;
  body: string;
  action: string;
}

export const ImageBanner = ({
  source,
  body,
  title,
  action,
}: ImageBannerProps) => {
  return (
    <section className="image-banner">
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
          <Title className="image-banner-title">{title}</Title>
          <Typography className="image-banner-body">{body}</Typography>
          <ActionLink href="/" className="image-banner-action">
            {action}
          </ActionLink>
        </div>
      </div>
    </section>
  );
};
