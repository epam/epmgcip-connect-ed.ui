import { Button, ButtonTheme } from "@/components/button/button.tsx";
import { WavyImage } from "@/components/wavy-image/wavy-image.tsx";
import "./wave-banner.scss";

export interface WaveBannerProps {
  theme?: string;
  action?: string;
  imageSource: string;
  title: string;
  body: string;
}

export const WaveBanner = ({
  theme,
  imageSource,
  title,
  body,
  action,
}: WaveBannerProps) => (
  <section className="wave-banner" data-theme={theme}>
    <div className="wave-banner-content">
      <WavyImage className="wave-banner-image" source={imageSource} />
      <div className="wave-banner-info">
        <h2 className="wave-banner-title">{title}</h2>
        <p className="wave-banner-body">{body}</p>
        {action && (
          <Button
            variant="outline"
            className="wave-banner-action"
            theme={theme as ButtonTheme}
          >
            {action}
          </Button>
        )}
      </div>
    </div>
  </section>
);
