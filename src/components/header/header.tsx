import { ReactNode } from "react";
import Link from "next/link";
import { ComponentSharedImage } from "@/__generated__/graphql.ts";
import "./header.scss";

export interface HeaderProps {
  logo?: Omit<ComponentSharedImage, "id">;
  leftSlot: ReactNode;
  rightSlot: ReactNode;
}

export const Header = ({ logo, leftSlot, rightSlot }: HeaderProps) => (
  <header className="header">
    <div className="header-content">
      {leftSlot}
      <div className="logo">
        <Link
          href={logo?.URL ?? "/"}
          target={logo?.Open ? "_blank" : undefined}
          className="logo-link"
          aria-label="logo"
        >
          <img
            alt={logo?.AltText ?? ""}
            src={logo?.Image?.data?.attributes?.url}
            className="logo-icon"
          />
        </Link>
      </div>
      {rightSlot}
    </div>
  </header>
);
