import { ParkingData } from "./App";

interface ResultsTableProps {
  data: ParkingData[];
}

export default function ResultsTable(props: ResultsTableProps) {
  const { data } = props;
  return (
    <table className="mx-auto min-w-full divide-y divide-gray-200 dark:divide-gray-700">
      <thead>
        <tr>
          <th className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
            Distance
          </th>
          <th className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
            Road Name
          </th>
          <th className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"></th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
        {data.map((parkingData) => (
          <tr key={parkingData.id}>
            <td className="px-4 py-4 text-sm font-medium whitespace-nowrap">
              10
            </td>
            <td className="px-4 py-4 text-sm font-medium whitespace-nowrap">
              {parkingData.road_name} {parkingData.road_suffix}
            </td>
            <td className="px-4 py-4 text-sm font-medium whitespace-nowrap">
              icon
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
