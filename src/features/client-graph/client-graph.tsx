import { Suspense } from "react";
import { LoadingSection } from "@/features/loading-section/loading-section.tsx";
import { getStatisticsAction } from "@/actions/get-statistics.action";
import "./client-graph.scss";

const ClientGraphSection = async () => {
  const result = await getStatisticsAction();

  const cards = [
    {
      label: "Number of children",
      value: result?.numberOfChildren?.toFixed(0),
    },
    {
      label: "Number of equipment",
      value: result?.numberOfEquipment?.toFixed(0),
    },
    {
      label: "Average age of children",
      value: result?.averageYearOfChild?.toFixed(1),
    },
  ];

  return (
    <div className="client-graph">
      {cards.map(card => (
        <article key={card.label} className="client-graph-card">
          <span className="client-graph-card-label">{card.label}</span>
          <span className="client-graph-card-value">{card.value}</span>
        </article>
      ))}
    </div>
  );
};

export const ClientGraph = () => (
  <Suspense fallback={<LoadingSection />}>
    <ClientGraphSection />
  </Suspense>
);
