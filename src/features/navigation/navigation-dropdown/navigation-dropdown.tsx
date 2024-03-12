import { ReactEventHandler } from "react";
import { NavigationSection } from "@/features/navigation/navigation-section/navigation-section.tsx";
import DropArrow from "@/assets/icons/drop-arrow.svg?react";
import { PageEntity } from "@/__generated__/graphql.ts";
import "./navigation-dropdown.scss";

export interface NavigationDropdownProps {
  label: string;
  items: PageEntity[];
  onToggle: ReactEventHandler<HTMLDetailsElement>;
}

export const NavigationDropdown = ({
  label,
  items,
  onToggle,
}: NavigationDropdownProps) => (
  // TODO: when name attribute supported in all browsers replace with name attribute to have accordion behavior
  // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions
  <details className="navigation-dropdown" onClick={onToggle}>
    <summary className="navigation-summary">
      {label}
      <DropArrow className="navigation-summary-icon" role="presentation" />
    </summary>
    <NavigationSection
      className="navigation-section"
      name={label}
      items={items}
    />
  </details>
);
