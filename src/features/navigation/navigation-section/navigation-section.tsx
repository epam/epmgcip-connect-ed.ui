import cc from "classcat";
import NavLink from "next/link";
import { Page } from "@/__generated__/graphql.ts";
import "./navigation-section.scss";

export interface NavigationSectionProps {
  name: string;
  items: Page[];
  className?: string;
}

export const NavigationSection = ({
  name,
  items,
  className,
}: NavigationSectionProps) => {
  return (
    <div className={cc(["navigation-section", className])}>
      <span className="navigation-section-title">{name}</span>
      <ul className="navigation-section-list">
        {items.map(({ Slug, Title, documentId }) => {
          const slug = Slug ?? "";

          return (
            <li key={documentId} className="navigation-section-list-item">
              <NavLink href={slug} className="navigation-section-link">
                {Title}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
