import { ButtonLink } from "@/components/button-link/button-link.tsx";
import { InformationCard } from "@/components/information-card/information-card.tsx";
import { SectionBase } from "@/components/section-base/section-base.tsx";
import { Typography } from "@/components/typography/typography.tsx";
import { WavyCard } from "@/components/wavy-card/wavy-card.tsx";
import { getInformationSectionTheme } from "@/features/information-section/utils.ts";
import { isNotNull } from "@/utils/type-guards/is-not-null.ts";
import {
  ComponentSharedNoodlesCard,
  InfoSectionFragmentFragment,
} from "@/__generated__/graphql.ts";
import { SectionBaseTitle } from "@/components/section-base";
import "./information-section.scss";

export interface InformationSectionProps {
  data: InfoSectionFragmentFragment;
}

// eslint-disable-next-line complexity
export const InformationSection = ({
  data: {
    Title: title,
    Text: description,
    Theme: theme,
    infoCard: cards,
    Button: action,
  },
}: InformationSectionProps) => {
  const cardsData = cards?.filter(isNotNull);
  return (
    <SectionBase
      className="information-section"
      contentClassName="information-section-content"
      style={getInformationSectionTheme(theme)}
    >
      {title && (
        <SectionBaseTitle className="information-section-title">
          {title.Title}
        </SectionBaseTitle>
      )}
      {description && (
        <Typography className="information-section-description">
          {description}
        </Typography>
      )}
      <ul className="information-section-list">
        {cardsData?.map(item => (
          <WavyCard
            key={item.id}
            as="li"
            className="information-section-list-item"
            theme={item?.Theme ?? undefined}
          >
            <InformationCard data={item as ComponentSharedNoodlesCard} />
          </WavyCard>
        ))}
      </ul>
      {action && (
        <ButtonLink
          href={action.URL ?? ""}
          className="information-section-action"
          variant={action?.Type ?? undefined}
          theme={action?.ButtonTheme}
        >
          {action.Label}
        </ButtonLink>
      )}
    </SectionBase>
  );
};
