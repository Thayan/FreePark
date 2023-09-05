import { useState } from "react";
import ResultsPage from "./ResultsPage";
import getSearchResults from "./SearchResults";

export default function Home() {
  async function submitSearch(location: string): Promise<void> {
    const response = await getSearchResults(location);

    if (!response) return;

    const { data: parkingResults } = response;

    if (parkingResults && parkingResults.length) {
      setParkingSpots(parkingResults);
      //   setLocation(location);
    }
  }

  const [parkingSpots, setParkingSpots] = useState([]);
  return (
    <ResultsPage submitSearch={submitSearch} parkingSpots={parkingSpots} />
  );
}

export class ParkingSpots implements ParkingData {
  constructor(
    private _id: number = 0,
    private _roadName: string = "",
    private _roadSuffix: string = "",
    private _longitude: number = 0,
    private _latitude: number = 0,
    private _cost_per_hour: number = 0,
    private _free_after: string = "",
    private _pay_from: string = ""
  ) {}
  id!: number;
  roadName!: string;
  roadSuffix!: string;
  longitude!: number;
  latitude!: number;
  cost_per_hour!: number;
  free_after!: string;
  pay_from!: string;
}

export interface ParkingData {
  id: number;
  roadName: string;
  roadSuffix: string;
  longitude: number;
  latitude: number;
  cost_per_hour: number;
  free_after: string;
  pay_from: string;
}
