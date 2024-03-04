import cc from "classcat";
import { NavigationItem } from "@/features/navigation/navigation-menu/navigation-menu.types.ts";
import "./navigation-section.scss";

export interface NavigationSectionProps {
  name: string;
  items: NavigationItem[];
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
      {items.map(({ label, link }) => (
        <li key={link} className="navigation-section-list-item">
          <a href={link} className="navigation-section-link">
            {label}
          </a>
        </li>
      ))}
    </ul>
  </div>
);
