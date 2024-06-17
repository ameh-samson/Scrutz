import { DatePickerWithRange } from "@/components/ui/date-range-picker";
import SectionTitle from "./custom/SectionTitle";
import NoActivity from "./custom/NoActivity";

const Overview = () => {
  return (
    <div>
      <div className="flex justify-between items-center">
        <SectionTitle>Overview</SectionTitle>
        <DatePickerWithRange />
      </div>

      <div>
        <NoActivity />
      </div>
    </div>
  );
};

export default Overview;
