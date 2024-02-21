export interface NavigationItem {
  label: string;
  link: string;
}

export interface NavigationMenuItem {
  label: string;
  link: string;
  children?: NavigationItem[];
}
