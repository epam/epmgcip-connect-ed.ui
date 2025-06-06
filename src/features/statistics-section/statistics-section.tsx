import { StatisticsCard } from "@/features/statistics-section/statistics-card/statistics-card.tsx";
import { ButtonLink } from "@/components/button-link/button-link.tsx";
import { getStatisticsSectionTheme } from "@/features/statistics-section/utils.ts";
import { isNotNull } from "@/utils/type-guards/is-not-null.ts";
import { StatisticsSectionFragment } from "@/__generated__/graphql.ts";
import { SectionBase, SectionBaseTitle } from "@/components/section-base";
import "./statistics-section.scss";

type StatisticsSectionProps = {
  data: StatisticsSectionFragment;
};

export const StatisticsSection = ({ data }: StatisticsSectionProps) => {
  return (
    <SectionBase
      className="statistics-section"
      contentClassName="statistics-section-content"
      hasWave={data?.ShowWave}
      style={getStatisticsSectionTheme(data?.Theme)}
    >
      <div className="statistics-section-info">
        <SectionBaseTitle level={data?.Title?.HeadingLevel}>
          {data?.Title?.Title}
        </SectionBaseTitle>
        <p className="statistics-section-description">{data?.Summary}</p>
        {data?.CTA && (
          <div>
            <ButtonLink
              variant={data.CTA.Type ?? "main"}
              href={data.CTA.URL ?? ""}
              theme={data.CTA.ButtonTheme}
            >
              {data.CTA.Label}
            </ButtonLink>
          </div>
        )}
      </div>
      <div className="statistics-section-stats">
        {data.StatisticsCards?.filter(isNotNull)?.map(card => {
          return (
            <StatisticsCard
              key={card.title}
              className="stat-item"
              theme={card.theme ?? undefined}
              title={card.title}
              description={card.description}
              value={card.value}
            />
          );
        })}
      </div>
    </SectionBase>
  );
};
