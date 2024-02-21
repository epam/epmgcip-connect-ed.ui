import { useRef } from "react";
import { Button } from "@/components/button/button.tsx";
import { NavigationMenu } from "@/components/navigation/navigation-menu/navigation-menu.tsx";
import { SocialRibbon } from "@/components/social-ribbon/social-ribbon.tsx";
import { useClickOutside } from "@/hooks/use-click-outside.tsx";
import "./navigation-sidebar.scss";

export interface NavigationSidebarProps {
  isOpen: boolean;
  id: string;
  className?: string;
  onClose: () => void;
}

export const NavigationSidebar = ({
  id,
  isOpen,
  className,
  onClose,
}: NavigationSidebarProps) => {
  const asideRef = useRef<HTMLElement>(null);

  useClickOutside(asideRef, onClose, isOpen);

  return (
    <div className={className}>
      <div className="sidebar-backdrop" aria-hidden={!isOpen} />
      <aside
        ref={asideRef}
        id={id}
        className="navigation-sidebar"
        role="menu"
        aria-hidden={!isOpen}
      >
        <NavigationMenu className="navigation-menu" />
        <Button variant="nav">Donate now</Button>
        <SocialRibbon className="social-ribbon" />
      </aside>
    </div>
  );
};
