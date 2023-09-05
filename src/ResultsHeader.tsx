import { useNavigate } from "react-router-dom";
import FilterAlt from "@mui/icons-material/FilterAlt";
import ArrowBackiOS from "@mui/icons-material/ArrowBackIos";

interface ResultsHeaderProps {
  location: string;
}

export default function ResultsHeader(props: ResultsHeaderProps) {
  const navigate = useNavigate();
  return (
    <div className="m-auto">
      <button onClick={() => navigate(-1)} className="float-left">
        <ArrowBackiOS />
        Back
      </button>
      <div className="float-right">
        <FilterAlt />
      </div>
      <div className="font-light text-3xl mr-[50%] ml-[50%]">
        {props.location}
      </div>
    </div>
  );
}
