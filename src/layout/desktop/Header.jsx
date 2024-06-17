import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import UserProfile from "../UserProfile";
import { IoIosSearch } from "react-icons/io";

const Header = () => {
  return (
    <div>
      <div className="sticky top-0">
        <div className="container py-6">
          <div className="flex justify-between items-center">
            <div className="relative w-96">
              <Input
                type="text"
                placeholder="  Search..."
                className="w-full pl-10"
              />
              <IoIosSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
            <div className="flex space-x-8 items-center">
              <UserProfile />
            </div>
          </div>
        </div>
        <Separator />
      </div>
    </div>
  );
};

export default Header;
