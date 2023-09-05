import SearchBar, { SearchBarProps } from "./SearchBar";
import Tabs, { TabsProps } from "./Tabs";

type SearchPageProps = TabsProps & SearchBarProps;

export default function SearchPage(props: SearchPageProps) {
  return (
    <div>
      <SearchBar submitSearch={props.submitSearch} />
      <Tabs tabOptions={props.tabOptions} selectedTab={props.selectedTab} />
    </div>
  );
}
