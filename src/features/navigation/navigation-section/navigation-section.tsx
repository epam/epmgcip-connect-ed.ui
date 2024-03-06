import cc from "classcat";
import { NavLink } from "react-router-dom";
import { PageEntity } from "@/__generated__/graphql.ts";
import "./navigation-section.scss";

export interface NavigationSectionProps {
  name: string;
  items: PageEntity[];
  className?: string;
}

export const NavigationSection = ({
  name,
  items,
  className,
}: NavigationSectionProps) => (
  <div className={cc(["navigation-section", className])}>
    <span className="navigation-section-title">{name}</span>
    <ul className="navigation-section-list">
      {items.map(({ attributes }) => {
        const slug = attributes?.slug ?? "";

        return (
          <li key={slug} className="navigation-section-list-item">
            <NavLink to={slug} className="navigation-section-link">
              {attributes?.label}
            </NavLink>
          </li>
        );
      })}
    </ul>
  </div>
);
