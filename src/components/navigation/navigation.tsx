import { useCallback, useState } from "react";
import { Button } from "@/components/button/button.tsx";
import { Header } from "@/components/header/header.tsx";
import { NavigationMenu } from "@/components/navigation/navigation-menu/navigation-menu.tsx";
import { NavigationSidebar } from "@/components/navigation/navigation-sidebar/navigation-sidebar.tsx";
import { SocialRibbon } from "@/components/social-ribbon/social-ribbon.tsx";
import Burger from "@/assets/burger.svg?react";
import "./navigation.scss";

const sidebarId = "navigation-sidebar";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(previous => !previous);
  };

  const handleClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <>
      <div className="composed-header">
        <div className="social-ribbon-wrapper">
          <SocialRibbon className="social-ribbon" />
        </div>
        <Header
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
              <NavigationMenu className="navigation-menu" isAutoClosable />
              <Button variant="nav" className="donate-button">
                Donate today
              </Button>
            </>
          }
        />
      </div>
      <NavigationSidebar
        id={sidebarId}
        isOpen={isOpen}
        className="sidebar"
        onClose={handleClose}
      />
    </>
  );
};
