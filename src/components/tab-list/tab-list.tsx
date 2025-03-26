import { PropsWithChildren, SyntheticEvent } from "react";
import cc from "classcat";
import { getTabsListTheme } from "@/components/tab-list/utils.ts";
import {
  ComponentSharedArticleCategoryTab,
  Maybe,
} from "@/__generated__/graphql.ts";
import "./tab-list.scss";

export interface TabListProps<T> {
  theme?: ComponentSharedArticleCategoryTab;
  tabs: T[];
  activeTab: string;
  className?: string;
  getTabData: (tab: T) => { value?: Maybe<string>; label?: Maybe<string> };
  onChange: (value: string) => void;
}

const TabListComponent = <T,>({
  theme,
  tabs,
  activeTab,
  className,
  getTabData,
  onChange,
}: TabListProps<T>) => {
  const handleChange = (event: SyntheticEvent<HTMLButtonElement>) => {
    const target = event.target as HTMLButtonElement;

    onChange(target.value);
  };

  return (
    <div
      role="tablist"
      className={cc(["tab-list", className])}
      style={getTabsListTheme(theme)}
    >
      {tabs.map(tab => {
        const { value, label } = getTabData(tab);

        return (
          <button
            key={value}
            role="tab"
            type="button"
            className="tab-list-tab"
            aria-selected={activeTab === value}
            value={value ?? ""}
            onClick={handleChange}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
};

TabListComponent.Panel = function TabListPanel({
  children,
  className,
}: PropsWithChildren<{
  className?: string;
}>) {
  return (
    <div role="tabpanel" className={cc(["tab-list-panel", className])}>
      {children}
    </div>
  );
};

export const TabList = TabListComponent;
