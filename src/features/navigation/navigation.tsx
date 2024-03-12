import { useCallback, useEffect, useRef, useState } from "react";
import { NavigationMenu } from "@/features/navigation/navigation-menu/navigation-menu.tsx";
import { NavigationSidebar } from "@/features/navigation/navigation-sidebar/navigation-sidebar.tsx";
import { ButtonLink } from "@/components/button-link/button-link.tsx";
import { Header } from "@/components/header/header.tsx";
import { SocialRibbon } from "@/components/social-ribbon/social-ribbon.tsx";
import { useLocationChange } from "@/hooks/use-location-change.ts";
import Burger from "@/assets/icons/burger.svg?react";
import {
  CategoryEntity,
  ComponentSharedButton,
  ComponentSharedImage,
  ComponentSharedSocialIcon,
} from "@/__generated__/graphql.ts";
import "./navigation.scss";

const sidebarId = "navigation-sidebar";

export interface NavigationProps {
  logo?: Omit<ComponentSharedImage, "id">;
  navigation?: CategoryEntity[];
  action?: Omit<ComponentSharedButton, "id">;
  stripe?: ComponentSharedSocialIcon[];
}

export const Navigation = ({
  navigation,
  logo,
  action,
  stripe,
}: NavigationProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let previousScrollPosition = window.scrollY;
    let headerBottom: number;

    const handleResize = () => {
      headerBottom =
        (ref.current?.offsetTop ?? 0) + (ref.current?.offsetHeight ?? 0);
    };

    handleResize();

    const handleScroll = () => {
      if (!ref.current) {
        return;
      }

      {
        let currentScrollPos = window.scrollY;

        if (
          previousScrollPosition > currentScrollPos ||
          currentScrollPos < headerBottom
        ) {
          ref.current.classList.remove("composed-header-hidden");
        } else {
          ref.current.classList.add("composed-header-hidden");
        }

        previousScrollPosition = currentScrollPos;
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleClick = () => {
    setIsOpen(previous => !previous);
  };

  const handleClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  useLocationChange(handleClose);

  return (
    <>
      <div className="composed-header" ref={ref}>
        <div className="social-ribbon-wrapper">
          <SocialRibbon className="social-ribbon" socialLinks={stripe} />
        </div>
        <Header
          logo={logo}
          leftSlot={
            <button
              type="button"
              className="burger"
              aria-label="burger button"
              aria-expanded={isOpen}
              aria-controls={sidebarId}
              onClick={handleClick}
            >
              <Burger />
            </button>
          }
          rightSlot={
            <>
              <NavigationMenu
                className="navigation-menu"
                menu={navigation}
                isAutoClosable
              />
              {action && (
                <ButtonLink
                  variant="nav"
                  className="donate-button"
                  to={action?.url ?? ""}
                >
                  {action?.label}
                </ButtonLink>
              )}
            </>
          }
        />
      </div>
      <NavigationSidebar
        id={sidebarId}
        isOpen={isOpen}
        className="sidebar"
        onClose={handleClose}
        navigation={navigation}
        stripe={stripe}
        action={action}
      />
    </>
  );
};
