import SectionTitle from "./custom/SectionTitle";
import { IoIosSearch } from "react-icons/io";
import { FaChevronDown } from "react-icons/fa";
import { Input } from "@/components/ui/input";
import { DataTable } from "./custom/datatable/datatable";
import { columns } from "./custom/datatable/column";
import { useGlobalContext } from "@/context/Context";

const Campaign = () => {
  const {
    campaigns,
    totalCampaigns,
    totalInactiveCampaigns,
    totalActiveCampaigns,
  } = useGlobalContext();

  return (
    <div>
      <div>
        <SectionTitle>All Campaigns</SectionTitle>
      </div>

      <div className="flex items-center justify-between mt-6">
        <div className="flex gap-4">
          <span className="p-3 border border-darkCyan rounded text-sm text-darkCyan">
            All({totalCampaigns})
          </span>
          <span className="p-3 border border-darkCyan rounded text-sm text-darkCyan">
            Inactive({totalInactiveCampaigns})
          </span>
          <span className="p-3 border border-darkCyan rounded text-sm text-darkCyan">
            Active({totalActiveCampaigns})
          </span>
        </div>

        <div className="flex items-center gap-7">
          <div className="relative w-60">
            <Input
              type="text"
              placeholder="Search..."
              className="w-full pl-10"
            />
            <IoIosSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>

          <div className="relative w-60">
            <Input
              type="text"
              placeholder="  Filter by date..."
              className="w-full pl-10"
            />
            <FaChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>
      </div>

      <div className="mt-8">
        <DataTable columns={columns} data={campaigns} />
      </div>
    </div>
  );
};

export default Campaign;
