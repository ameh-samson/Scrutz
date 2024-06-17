import { DatePickerWithRange } from "@/components/ui/date-range-picker";
import SectionTitle from "./custom/SectionTitle";

const Overview = () => {
  return (
    <div>
      <div>
        <SectionTitle>Overview</SectionTitle>
        <DatePickerWithRange />
      </div>
    </div>
  );
};

export default Overview;
