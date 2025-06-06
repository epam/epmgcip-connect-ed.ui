import { SyntheticEvent, useCallback, useRef } from "react";
import cc from "classcat";
import NavLink from "next/link";
import { NavigationDropdown } from "@/features/navigation/navigation-dropdown/navigation-dropdown.tsx";
import { useClickOutside } from "@/hooks/use-click-outside.ts";
import { useLocationChange } from "@/hooks/use-location-change.ts";
import { isNotNull } from "@/utils/type-guards/is-not-null.ts";
import { Category } from "@/__generated__/graphql.ts";
import "./navigation-menu.scss";

interface NavigationMenuProps {
  className?: string;
  isAutoClosable?: boolean;
  menu?: Category[];
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
        {menu?.map(({ slug, label, pages }) => {
          return (
            <li key={label} className="navigation-item">
              {!!pages && !!pages.length ? (
                <NavigationDropdown
                  label={label ?? ""}
                  items={pages.filter(isNotNull)}
                  onToggle={handleToggle}
                />
              ) : (
                <NavLink href={slug ?? ""} className="navigation-link">
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
