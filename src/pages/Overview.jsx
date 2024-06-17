import { DatePickerWithRange } from "@/components/ui/date-range-picker";
import SectionTitle from "./custom/SectionTitle";
import NoActivity from "./custom/NoActivity";
import { Button } from "@/components/ui/button";
import { CiExport } from "react-icons/ci";

const Overview = () => {
  return (
    <div>
      <div className="flex justify-between items-center">
        <SectionTitle>Overview</SectionTitle>

        <div className="flex items-center gap-4">
          <DatePickerWithRange />

          <Button>
            <CiExport />
            Export
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
