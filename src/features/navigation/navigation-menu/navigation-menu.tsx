import { SyntheticEvent, useCallback, useRef } from "react";
import cc from "classcat";
import { NavLink } from "react-router-dom";
import { CategoryEntity } from "@/__generated__/graphql.ts";
import { NavigationDropdown } from "@/features/navigation/navigation-dropdown/navigation-dropdown.tsx";
import { useClickOutside } from "@/hooks/use-click-outside.ts";
import { useLocationChange } from "@/hooks/use-location-change.ts";
import "./navigation-menu.scss";

interface NavigationMenuProps {
  className?: string;
  isAutoClosable?: boolean;
  menu?: CategoryEntity[];
}

export const NavigationMenu = ({
  className,
  isAutoClosable = false,
  menu,
}: NavigationMenuProps) => {
  const navRef = useRef<HTMLElement>(null);

  const closeDetails = useCallback(() => {
    const dropdowns = navRef.current?.querySelectorAll("details");

    if (dropdowns) {
      Array.from(dropdowns).forEach(details => {
        details.removeAttribute("open");
      });
    }
  }, []);

  useLocationChange(closeDetails);

  useClickOutside(navRef, closeDetails, isAutoClosable);

  const handleToggle = (event: SyntheticEvent<HTMLDetailsElement>) => {
    const target = event.target as HTMLElement;
    const targetDetails = target.parentNode as HTMLDetailsElement | null;

    if (targetDetails && !targetDetails.open) {
      const dropdowns = navRef.current?.querySelectorAll("details");

      if (dropdowns) {
        Array.from(dropdowns).forEach(details => {
          if (details !== targetDetails) {
            details.removeAttribute("open");
          }
        });
      }
    }
  };

  return (
    <nav className={cc(["navigation-menu", className])} ref={navRef}>
      <ul className="navigation-list">
        {menu?.map(({ attributes }) => {
          const slug = attributes?.slug ?? "";
          const label = attributes?.label;
          const pages = attributes?.pages;

          return (
            <li key={label} className="navigation-item">
              {!!pages?.data && !!pages.data.length ? (
                <NavigationDropdown
                  label={label ?? ""}
                  items={pages.data}
                  onToggle={handleToggle}
                />
              ) : (
                <NavLink to={slug ?? ""} className="navigation-link">
                  {label}
                </NavLink>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
