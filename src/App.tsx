import { SearchBar } from "./SearchBar";
import ResultsTable from "./ResultsTable";
import data from "./data.json";

export default function App() {
  const parsedData: ParkingData[] = data.parkingSpots;

  return (
    <div>
      <SearchBar />
      <ResultsTable data={parsedData} />
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
