import { ReactNode } from "react";
import Logo from "@/assets/logo.svg?react";
import "./header.scss";

export interface HeaderProps {
  leftSlot: ReactNode;
  rightSlot: ReactNode;
}

export const Header = ({ leftSlot, rightSlot }: HeaderProps) => (
  <header className="header">
    {leftSlot}
    <div className="logo">
      <a href="/" className="logo-link" aria-label="logo">
        <Logo className="logo-icon" />
      </a>
    </div>
    {rightSlot}
  </header>
);
