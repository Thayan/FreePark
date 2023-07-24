interface TabsProps {
  tabOptions: string[];
  selectedTab: string;
}

export default function Tabs(props: TabsProps) {
  const selectedButtonClasses =
    "selectedTab sm:text-base focus:outline-none dark:border-blue-400 dark:text-blue-300";
  const buttonClasses =
    "tab sm:text-base dark:text-white focus:outline-none hover:border-gray-400 cursor-base";
  return (
    <div className="tabContainer width-[270px]flex dark:border-gray-700">
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
