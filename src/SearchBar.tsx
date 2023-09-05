import { FormEvent, useState } from "react";
import { Link } from "react-router-dom";

export interface SearchBarProps {
  submitSearch: (location: string) => void;
}

export default function SearchBar(props: SearchBarProps) {
  const [searchLocation, setSearchLocation] = useState("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (searchLocation === "") return;

    props.submitSearch(searchLocation);
  }

  return (
    <div className="mx-auto">
      <form onSubmit={handleSubmit} className="mx-auto">
        <input
          type="text"
          id="searchLocation"
          onChange={(e) => setSearchLocation(e.target.value)}
          placeholder="Location"
          className="searchInput dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
        />
        <Link to={"/search/" + searchLocation}>
          <button className="searchButton hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
            Search
          </button>
        </Link>
      </form>
    </div>
  );
}
