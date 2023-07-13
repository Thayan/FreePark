import { FormEvent, useState } from "react";

interface SearchBarProps {
  submitSearch: (location: string) => void;
}

export function SearchBar(props: SearchBarProps) {
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
          className="mx-auto block text-center px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 mt-2 mb-2"
        />
        <button className="mx-auto block px-4 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-700 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
          Search
        </button>
      </form>
    </div>
  );
}
