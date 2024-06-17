import SectionTitle from "./custom/SectionTitle";
import { IoIosSearch } from "react-icons/io";
import { FaChevronDown } from "react-icons/fa";
import { Input } from "@/components/ui/input";

const Campaign = () => {
  return (
    <div>
      <div>
        <SectionTitle>All Campaigns</SectionTitle>
      </div>
      <div>
        <span>All(90)</span>
        <span>Inactive(90)</span>
        <span>Active(90)</span>
      </div>

      <div className="relative w-60">
        <Input type="text" placeholder="  Search..." className="w-full pl-10" />
        <IoIosSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
      </div>

      <div className="relative w-60">
        <Input type="text" placeholder="  Search..." className="w-full pl-10" />
        <FaChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
      </div>
    </div>
  );
};

export default Campaign;
