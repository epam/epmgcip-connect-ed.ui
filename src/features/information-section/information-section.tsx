import { ButtonLink } from "@/components/button-link/button-link.tsx";
import { InformationCard } from "@/components/information-card/information-card.tsx";
import { SectionBase } from "@/components/section-base/section-base.tsx";
import { Typography } from "@/components/typography/typography.tsx";
import { WavyCard } from "@/components/wavy-card/wavy-card.tsx";
import { getInformationSectionTheme } from "@/features/information-section/utils.ts";
import {
  ComponentSharedButton,
  ComponentSharedColor,
  ComponentSharedNoodlesCard,
} from "@/__generated__/graphql.ts";
import "./information-section.scss";

export interface InformationSectionProps {
  title?: string | null;
  description?: string | null;
  cards?: ComponentSharedNoodlesCard[] | null;
  action?: ComponentSharedButton | null;
  theme?: ComponentSharedColor | null;
}

export const InformationSection = ({
  title,
  description,
  cards,
  action,
  theme,
}: InformationSectionProps) => (
  <SectionBase
    className="information-section"
    style={getInformationSectionTheme(theme)}
  >
    <div className="information-section-content">
      {title && (
        <SectionBase.Title className="information-section-title">
          {title}
        </SectionBase.Title>
      )}
      {description && (
        <Typography className="information-section-description">
          {description}
        </Typography>
      )}
      <ul className="information-section-list">
        {cards?.map(item => (
          <WavyCard
            key={item.id}
            as="li"
            className="information-section-list-item"
            theme={item?.borderColor ?? undefined}
          >
            <InformationCard data={item} />
          </WavyCard>
        ))}
      </ul>
      {action && (
        <ButtonLink
          to={action.url ?? ""}
          className="information-section-action"
          variant={action?.type ?? undefined}
          // TODO: change to appropriate theming after clarification
          // theme={action?.bgColor ?? undefined}
        >
          {action.label}
        </ButtonLink>
      )}
    </div>
  </SectionBase>
);
