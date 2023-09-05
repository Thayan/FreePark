import LocationResults from "./LocationResults";
import { SearchBarProps } from "./SearchBar";
import { TabsProps } from "./Tabs";
import SearchPage from "./SearchPage";

interface HeaderProps extends SearchBarProps, TabsProps {
  location: string;
}

export default function Header(props: HeaderProps) {
  return (
    <div>
      {props.location ? (
        <div className="mt-24">
          <LocationResults location={props.location} />
        </div>
      ) : (
        <SearchPage
          submitSearch={props.submitSearch}
          tabOptions={props.tabOptions}
          selectedTab={props.selectedTab}
        />
      )}
    </div>
  );
}
