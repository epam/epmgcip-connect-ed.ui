import { useCallback, useState } from "react";
import { ButtonLink } from "@/components/button-link/button-link.tsx";
import { Header } from "@/components/header/header.tsx";
import { SocialRibbon } from "@/components/social-ribbon/social-ribbon.tsx";
import {
  CategoryEntity,
  ComponentSharedButton,
  ComponentSharedImage,
  ComponentSharedSocialIcon,
} from "@/__generated__/graphql.ts";
import Burger from "@/assets/icons/burger.svg?react";
import { NavigationMenu } from "@/features/navigation/navigation-menu/navigation-menu.tsx";
import { NavigationSidebar } from "@/features/navigation/navigation-sidebar/navigation-sidebar.tsx";
import { useLocationChange } from "@/hooks/use-location-change.ts";
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

  const handleClick = () => {
    setIsOpen(previous => !previous);
  };

  const handleClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  useLocationChange(handleClose);

  return (
    <>
      <div className="composed-header">
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
