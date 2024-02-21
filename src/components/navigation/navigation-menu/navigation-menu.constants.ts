import { NavigationMenuItem } from "@/components/navigation/navigation-menu/navigation-menu.types.ts";

export const menu: NavigationMenuItem[] = [
  {
    label: "What we do",
    link: "/",
    children: [
      {
        label: "Bridge the digital device",
        link: "/",
      },
      {
        label: "Equipment donations",
        link: "/",
      },
      {
        label: "Digital literacy for school children",
        link: "/",
      },
      {
        label: "Connecting Seniors to Digital World",
        link: "/",
      },
    ],
  },
  {
    label: "Get involved",
    link: "/",
    children: [
      {
        label: "How to get involved",
        link: "/",
      },
      {
        label: "Become an ambassador",
        link: "/",
      },
      {
        label: "Sign-up for our newsletter",
        link: "/",
      },
      {
        label: "Get in touch",
        link: "/",
      },
    ],
  },
  {
    label: "News",
    link: "/",
  },
  {
    label: "About us",
    link: "/",
    children: [
      {
        label: "Our history",
        link: "/",
      },
      {
        label: "Our team",
        link: "/",
      },
      {
        label: "The board",
        link: "/",
      },
      {
        label: "Our partners",
        link: "/",
      },
      {
        label: "Our mission & values",
        link: "/",
      },
    ],
  },
];
