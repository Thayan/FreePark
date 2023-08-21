import ResultsTable from "./ResultsTable";
import { useState } from "react";
import getSearchResults from "./SearchResults";
import ResultsTitle from "./ResultsTitle";
import Header from "./Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import ResultsPage from "./ResultsPage";

export default function App() {
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/search/:location"
            element={
              <ResultsPage
                submitSearch={function (location: string): void {
                  throw new Error("Function not implemented.");
                }}
                parkingSpots={[]}
              />
            }
          />
        </Routes>
      </main>
    </BrowserRouter>
  );
}
