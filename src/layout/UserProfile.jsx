import profileIcon from "../assets/profile.png";
import { IoMdNotificationsOutline } from "react-icons/io";
import { Separator } from "@/components/ui/separator";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const UserProfile = () => {
  return (
    <div className="flex justify-center items-center gap-1">
      <div className="h-6 w-6 flex justify-center items-center">
        <IoMdNotificationsOutline />
      </div>
      <Separator orientation="vertical" />
      <div className="w-9 h-9 bg-rb-secondary rounded-full text-sm grid place-content-center font-bold">
        <img src={profileIcon} className="h-6 w-6" />
      </div>

      <Select className="hidden lg:flex flex-col items-start text-sm  border-none">
        <SelectTrigger className="text-darkGray border-none">
          <SelectValue placeholder="Big Tech"  />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="logout">Logout</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default UserProfile;
