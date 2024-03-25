import { Button, ButtonTheme } from "@/components/button/button.tsx";
import { SectionBase } from "@/components/section-base/section-base.tsx";
import { Title } from "@/components/title/title.tsx";
import { Typography } from "@/components/typography/typography.tsx";
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
  <SectionBase
    className="wave-banner"
    contentClassName="wave-banner-content"
    data-theme={theme}
  >
    <WavyImage className="wave-banner-image" source={imageSource} />
    <div className="wave-banner-info">
      <Title className="wave-banner-title">{title}</Title>
      <Typography className="wave-banner-body">{body}</Typography>
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
  </SectionBase>
);
