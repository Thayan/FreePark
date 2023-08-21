import { useParams } from "react-router-dom";
import ResultsHeader from "./ResultsHeader";
import Tabs from "./Tabs";

interface LocationResultsProps {
  location: string;
}

export default function LocationResults(props: LocationResultsProps) {
  return (
    <>
      <ResultsHeader location={props.location!} />
      <Tabs tabOptions={["List", "Map"]} selectedTab={"List"} />
    </>
  );
}
