import { ParkingData } from "./App";

interface ResultsTableProps {
  data: ParkingData[];
}

export default function ResultsTable(props: ResultsTableProps) {
  const { data } = props;
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
        {data.map((parkingData) => (
          <tr key={parkingData.id}>
            <td className="resultsTableCell">10</td>
            <td className="resultsTableCell">
              {parkingData.road_name} {parkingData.road_suffix}
            </td>
            <td className="resultsTableCell">icon</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
