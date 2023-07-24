import SearchBar from "./SearchBar";
import ResultsTable from "./ResultsTable";
import data from "./data.json";
import { useState } from "react";
import Tabs from "./Tabs";
import React from "react";

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

export class ParkingSpots implements ParkingData {
  constructor(
    private _id: number = 0,
    private _road_name: string = "",
    private _road_suffix: string = "",
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
  get road_name(): string {
    return this._road_name;
  }
  set road_name(road_name: string) {
    this._road_name = road_name;
  }
  get road_suffix(): string {
    return this._road_suffix;
  }
  set road_suffix(road_suffix: string) {
    this._road_suffix = road_suffix;
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
  road_name: string;
  road_suffix: string;
  longitude: number;
  latitude: number;
  cost_per_hour: number;
  free_after: string;
  pay_from: string;
}
