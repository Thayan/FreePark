import ResultsHeader from "./ResultsHeader";
import Tabs from "./Tabs";

interface LocationResultsProps {
  location: string;
}

export default function LocationResults(props: LocationResultsProps) {
  return (
    <div>
      <ResultsHeader location={props.location!} />
      <Tabs tabOptions={["List", "Map"]} selectedTab={"List"} />
    </div>
  );
}
