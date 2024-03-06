import { useRef } from "react";
import { ButtonLink } from "@/components/button-link/button-link.tsx";
import { SocialRibbon } from "@/components/social-ribbon/social-ribbon.tsx";
import {
  CategoryEntity,
  ComponentSharedButton,
  ComponentSharedSocialIcon,
} from "@/__generated__/graphql.ts";
import { NavigationMenu } from "@/features/navigation/navigation-menu/navigation-menu.tsx";
import { useClickOutside } from "@/hooks/use-click-outside.ts";
import "./navigation-sidebar.scss";

export interface NavigationSidebarProps {
  isOpen: boolean;
  id: string;
  className?: string;
  onClose: () => void;
  navigation?: CategoryEntity[];
  action?: Omit<ComponentSharedButton, "id">;
  stripe?: ComponentSharedSocialIcon[];
}

export const NavigationSidebar = ({
  id,
  isOpen,
  className,
  onClose,
  action,
  navigation,
  stripe,
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
        <NavigationMenu className="navigation-menu" menu={navigation} />
        {action && (
          <ButtonLink variant="nav" to={action?.url ?? ""}>
            {action?.label}
          </ButtonLink>
        )}
        <SocialRibbon className="social-ribbon" socialLinks={stripe} />
      </aside>
    </div>
  );
};
