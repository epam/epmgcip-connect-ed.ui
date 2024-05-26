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
          href={logo?.url ?? "/"}
          target={logo?.newTab ? "_blank" : undefined}
          className="logo-link"
          aria-label="logo"
        >
          <img
            alt={logo?.altText ?? ""}
            src={logo?.image?.data?.attributes?.url}
            className="logo-icon"
          />
        </Link>
      </div>
      {rightSlot}
    </div>
  </header>
);
