import { useParams } from "react-router-dom";
import Header from "./Header";
import { useState } from "react";
import ResultsTitle from "./ResultsTitle";
import ResultsTable from "./ResultsTable";
import { ParkingData } from "./Home";

interface ResultsPageProps {
  submitSearch: (location: string) => void;
  parkingSpots: ParkingData[];
}

export default function ResultsPage(props: ResultsPageProps) {
  const [parkingSpots, setParkingSpots] = useState(props.parkingSpots);
  const [selectedTab, setSelectedTab] = useState("Nearby");
  const tabOptions = ["Nearby", "History", "Favourites"];
  const params = useParams();
  const [location, setLocation] = useState(params.location);

  return (
    <div>
      <div className="mx-auto w-4/5">
        <Header
          submitSearch={props.submitSearch}
          tabOptions={tabOptions}
          selectedTab={selectedTab}
          location={location!}
        />
        <ResultsTitle title={parkingSpots.length ? location! : selectedTab} />
        <ResultsTable data={parkingSpots} />
      </div>
    </div>
  );
}
