import { useEffect, useState } from "react";
import { ParkingData } from "./Home";
import getSearchResults from "./SearchResults";
import Map from "@mui/icons-material/Map";

interface ResultsTableProps {
  data: ParkingData[];
}

export default function ResultsTable(props: ResultsTableProps) {
  const { data } = props;
  const [parkingSpots, setParkingSpots] = useState<ParkingData[]>(data);

  const getCurrentLocationResults = async () => {
    const response = await getSearchResults("current location");

    if (!response) return;

    const { data: parkingResults } = response;

    if (parkingResults && parkingResults.length) {
      setParkingSpots(parkingResults);
    }
  };

  useEffect(() => {
    getCurrentLocationResults();
  }, [data]);

  return (
    <table className="resultsTable dark: divide-gray-700">
      <thead>
        <tr>
          <th className="resultsTableHeader dark:text-gray-400 rtl:text-right">
            Distance
          </th>
          <th className="resultsTableHeader dark:text-gray-400 rtl:text-right">
            Road Name
          </th>
          <th className="resultsTableHeader dark:text-gray-400 rtl:text-right"></th>
        </tr>
      </thead>
      <tbody className="resultsTableBody dark:divide-gray-700 dark:bg-gray-900">
        {parkingSpots?.map((parkingData) => {
          return (
            <tr key={parkingData.id}>
              <td className="resultsTableCell">10</td>
              <td className="resultsTableCell">
                {parkingData.roadName} {parkingData.roadSuffix}
              </td>
              <td className="resultsTableCell">
                <Map />
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
