interface TabsProps {
  tabOptions: string[];
  selectedTab: string;
}

export default function Tabs(props: TabsProps) {
  const selectedButtonClasses =
    "inline-flex items-center h-10 px-4 -mb-px text-sm text-center bg-transparent border-b-2 sm:text-base focus:outline-none dark:border-blue-400 dark:text-blue-300 whitespace-nowrap text-blue-600 border-blue-500";
  const buttonClasses =
    "inline-flex items-center h-10 px-4 -mb-px text-sm text-center bg-transparent border-b-2 sm:text-base dark:text-white whitespace-nowrap cursor-base focus:outline-none hover:border-gray-400 text-gray-700 border-transparent";
  return (
    <div className="width-[270px] flex overflow-x-auto overflow-y-hidden border-b border-gray-200 whitespace-nowrap dark:border-gray-700">
      {props.tabOptions.map((tab) => (
        <button
          className={
            props.selectedTab === tab ? selectedButtonClasses : buttonClasses
          }
        >
          {tab}
        </button>
      ))}
    </div>
  );
}
