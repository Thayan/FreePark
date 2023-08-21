interface ResultsTitleProps {
  title: string;
}

export default function ResultsTitle(props: ResultsTitleProps) {
  return (
    <div className="resultsTableHeader dark:text-gray-900 rtl:text-right">
      {props.title}
    </div>
  );
}
