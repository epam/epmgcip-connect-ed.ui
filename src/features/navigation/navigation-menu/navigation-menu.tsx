import { SyntheticEvent, useCallback, useRef } from "react";
import cc from "classcat";
import { NavigationDropdown } from "@/features/navigation/navigation-dropdown/navigation-dropdown.tsx";
import { menu } from "@/features/navigation/navigation-menu/navigation-menu.constants.ts";
import { useClickOutside } from "@/hooks/use-click-outside.tsx";
import "./navigation-menu.scss";

interface NavigationMenuProps {
  className?: string;
  isAutoClosable?: boolean;
}

export const NavigationMenu = ({
  className,
  isAutoClosable = false,
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
        {menu.map(({ link, label, children }) => (
          <li key={label} className="navigation-item">
            {!!children && !!children.length ? (
              <NavigationDropdown
                label={label}
                items={children}
                onToggle={handleToggle}
              />
            ) : (
              <a href={link} className="navigation-link">
                {label}
              </a>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};
