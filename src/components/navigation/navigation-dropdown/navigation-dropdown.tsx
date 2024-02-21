import { ReactEventHandler } from "react";
import { NavigationItem } from "@/components/navigation/navigation-menu/navigation-menu.types.ts";
import { NavigationSection } from "@/components/navigation/navigation-section/navigation-section.tsx";
import DropArrow from "@/assets/drop-arrow.svg?react";
import "./navigation-dropdown.scss";

export interface NavigationDropdownProps {
  label: string;
  items: NavigationItem[];
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
