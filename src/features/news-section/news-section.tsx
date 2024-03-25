import { Button } from "@/components/button/button.tsx";
import { NewsCard } from "@/components/news-card/news-card.tsx";
import { SectionBase } from "@/components/section-base/section-base.tsx";
import cover from "@/assets/images/cover.png";
import "./news-section.scss";

export interface NewsSectionProps {
  title: string;
  cards: object[];
  action?: string;
}

export const NewsSection = ({ title, cards, action }: NewsSectionProps) => (
  <SectionBase className="news-section">
    <SectionBase.Title className="news-section-title">
      {title}
    </SectionBase.Title>
    <ul className="news-section-list">
      {cards.map((_, index) => (
        <NewsCard
          // TODO: change after integration
          /* eslint-disable-next-line react/no-array-index-key */
          key={index}
          cover={cover}
          as="li"
          title="Bekzat, 7th grade"
          body="My favourite subject is history. It seems to me that in history you also need to use a computer. You can find out a lot on the Internet, for example, about the Palaeolithic and ancient people."
          action="Find out more"
        />
      ))}
    </ul>
    {action && (
      <Button className="news-section-action" variant="outline">
        {action}
      </Button>
    )}
  </SectionBase>
);
