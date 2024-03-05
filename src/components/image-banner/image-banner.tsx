import { ActionLink } from "@/components/action-link/action-link.tsx";
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
          <h2 className="image-banner-title">{title}</h2>
          <p className="image-banner-body">{body}</p>
          <ActionLink href="/" className="image-banner-action">
            {action}
          </ActionLink>
        </div>
      </div>
    </section>
  );
};
