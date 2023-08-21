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

  get id(): number {
    return this._id;
  }
  set id(id: number) {
    this._id = id;
  }
  get roadName(): string {
    return this._roadName;
  }
  set roadName(roadName: string) {
    this._roadName = roadName;
  }
  get roadSuffix(): string {
    return this._roadSuffix;
  }
  set roadSuffix(roadSuffix: string) {
    this._roadSuffix = roadSuffix;
  }
  get longitude(): number {
    return this._longitude;
  }
  set longitude(longitude: number) {
    this._longitude = longitude;
  }
  get latitude(): number {
    return this._latitude;
  }
  set latitude(latitude: number) {
    this._latitude = latitude;
  }
  get cost_per_hour(): number {
    return this._cost_per_hour;
  }
  set cost_per_hour(cost_per_hour: number) {
    this._cost_per_hour = cost_per_hour;
  }
  get free_after(): string {
    return this._free_after;
  }
  set free_after(free_after: string) {
    this._free_after = free_after;
  }
  get pay_from(): string {
    return this._pay_from;
  }
  set pay_from(pay_from: string) {
    this._pay_from = pay_from;
  }
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
