import profileIcon from "../assets/profile.png";
import { IoMdNotificationsOutline } from "react-icons/io";
import { Separator } from "@/components/ui/separator";
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
    <div className="flex justify-center items-center">
      <div className="h-6 w-6 flex justify-center items-center">
        <IoMdNotificationsOutline />
      </div>
      <Separator orientation="vertical" />
      <div className="w-9 h-9 bg-rb-secondary rounded-full text-sm grid place-content-center font-bold">
        <img src={profileIcon} className="h-6 w-6" />
      </div>

      <div className="hidden lg:flex flex-col items-start">
        <span className="text-sm">Big Tech</span>
      </div>
    </div>
  );
};

export default UserProfile;
