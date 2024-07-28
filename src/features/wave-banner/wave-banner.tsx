import { ButtonLink } from "@/components/button-link/button-link.tsx";
import { SectionBase } from "@/components/section-base/section-base.tsx";
import { Title } from "@/components/title/title.tsx";
import { Typography } from "@/components/typography/typography.tsx";
import { WavyImage } from "@/components/wavy-image/wavy-image.tsx";
import { getWaveBannerTheme } from "@/features/wave-banner/utils.ts";
import { ComponentSectionsWaveBanner } from "@/__generated__/graphql.ts";
import "./wave-banner.scss";

export interface WaveBannerProps {
  data?: ComponentSectionsWaveBanner;
}

export const WaveBanner = ({ data }: WaveBannerProps) => {
  const {
    image,
    text,
    title,
    cta: action,
    isLargeImage,
    isTextBox,
    backgroundColor, // TODO: change to proper theme with bgColor and color for text
  } = data ?? {};

  const contentMode: "ltr" | "rtl" = "ltr"; // TODO: implement placement from BE side
  const imageClassName = isLargeImage
    ? "wave-banner-image--large"
    : "wave-banner-image";
  const infoClassName = isTextBox
    ? "wave-banner-info"
    : "wave-banner-info--card";
  const imageSource = image?.image?.data?.attributes?.url ?? "";

  return (
    <SectionBase
      className="wave-banner"
      contentClassName="wave-banner-content"
      style={getWaveBannerTheme(backgroundColor)}
      hasWave
    >
      {contentMode === "ltr" && (
        <WavyImage className={imageClassName} source={imageSource} />
      )}
      <div className={infoClassName}>
        {title && <Title className="wave-banner-title">{title.text}</Title>}
        <Typography className="wave-banner-body">{text}</Typography>
        {action && (
          <ButtonLink
            href={action.url ?? ""}
            className="wave-banner-action"
            variant={action.type ?? undefined}
            // @ts-expect-error it should be changed to button theme
            theme={action.bgColor ?? undefined}
          >
            {action.label}
          </ButtonLink>
        )}
      </div>
      {/*{contentMode === "rtl" && (*/}
      {/*  <WavyImage className={imageClassName} source={imageSource} />*/}
      {/*)}*/}
    </SectionBase>
  );
};
