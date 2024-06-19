import { DatePickerWithRange } from "@/components/ui/date-range-picker";
import { useGlobalContext } from "@/context/Context";
import SectionTitle from "./custom/SectionTitle";
import NoActivity from "./custom/NoActivity";
import { Button } from "@/components/ui/button";
import { CiExport } from "react-icons/ci";
import { DataTable } from "./custom/datatable/datatable";
import { columns } from "./custom/datatable/column";

const Overview = () => {
  const { campaigns } = useGlobalContext();

  return (
    <div>
      <div className="flex justify-between items-center">
        <SectionTitle></SectionTitle>

        <div className="flex items-center gap-4">
          <DatePickerWithRange />

          <Button className="bg-lightGrayish text-darkCyan hover:bg-darkCyan hover:text-white">
            <div className="flex items-center gap-2">
              <span className="text-base font-semibold">
                <CiExport />
              </span>
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
