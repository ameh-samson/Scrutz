import { DatePickerWithRange } from "@/components/ui/date-range-picker";
import SectionTitle from "./custom/SectionTitle";
import NoActivity from "./custom/NoActivity";
import { Button } from "@/components/ui/button";
import { CiExport } from "react-icons/ci";
import exportIcon from "../assets/export.png";

const Overview = () => {
  return (
    <div>
      <div className="flex justify-between items-center">
        <SectionTitle>Overview</SectionTitle>

        <div className="flex items-center gap-4">
          <DatePickerWithRange />

          <Button>
            <div className="flex items-center gap-2">
              <img src={exportIcon} className="h-4 w-4" />
              <span>Export</span>
            </div>
          </Button>
        </div>
      </div>

      <div>
        <NoActivity />
      </div>
    </div>
  );
};

export default Overview;
