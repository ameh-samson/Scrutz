import React from "react";
import companyLogo from "../../assets/scrutz-logo.png";
import { Link } from "react-router-dom";
import MobileNav from "./MobileNav";
import { Separator } from "@/components/ui/separator";

const Header = () => {
  return (
    <div className="sticky top-0 z-10 bg-white">
      <div className="container py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="w-40">
            <img src={companyLogo} alt="Scrutz" className="cursor-pointer" />
          </Link>

          <div className="flex space-x-8 items-center">
            <MobileNav />
          </div>
        </div>
      </div>
      <Separator />
    </div>
  );
};

export default Header;
