import {
  CategorizedNewsFragmentFragment,
  ComponentSectionsWaysToDonate,
} from "@/__generated__/graphql.ts";

export type ComponentSharedTab = Required<
  ComponentSectionsWaysToDonate["Tabs"][number]
>;

export type TabTheme = CategorizedNewsFragmentFragment["TabTheme"];
