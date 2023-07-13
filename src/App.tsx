import { SearchBar } from "./SearchBar";
import ResultsTable from "./ResultsTable";
import data from "./data.json";
import { useState } from "react";
import Tabs from "./Tabs";

export default function App() {
  const [parkingSpots, setParkingSpots] = useState(getTenRandomParkingSpots());
  const [selectedTab, setSelectedTab] = useState("Nearby");
  const tabOptions = ["Nearby", "History", "Favourites"];

  function submitSearch(location: string): void {
    setParkingSpots(getTenRandomParkingSpots());
  }

  function getTenRandomParkingSpots(): ParkingData[] {
    const shuffled = [...data.parkingSpots].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 10);
  }

  return (
    <div className="mx-auto w-4/5">
      <SearchBar submitSearch={submitSearch} />
      <Tabs tabOptions={tabOptions} selectedTab={selectedTab} />
      <ResultsTable data={parkingSpots} />
    </div>
  );
}

export class ParkingData {
  id: number;
  road_name: string;
  road_suffix: string;
  longitude: number;
  latitude: number;
  cost_per_hour: number;
  free_after: string;
  pay_from: string;

  constructor(
    id: number,
    road_name: string,
    road_suffix: string,
    longitude: number,
    latitude: number,
    cost_per_hour: number,
    free_after: string,
    pay_from: string
  ) {
    this.id = id;
    this.road_name = road_name;
    this.road_suffix = road_suffix;
    this.longitude = longitude;
    this.latitude = latitude;
    this.cost_per_hour = cost_per_hour;
    this.free_after = free_after;
    this.pay_from = pay_from;
  }
}
