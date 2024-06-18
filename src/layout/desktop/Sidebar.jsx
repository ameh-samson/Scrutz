import { useState } from "react";
import { Link } from "react-router-dom";
import companyLogo from "../../assets/scrutz-logo.png";
import helpImg from "../../assets/help.png";
import { navLinks } from "@/data";
import { Button } from "@/components/ui/button";
import { useGlobalContext } from "@/context/Context";

const DesktopSidebar = () => {
  const [activeLink, setActiveLink] = useState(location.pathname);

  return (
    <div className="w-[400px] h-screen py-6 px-8 flex flex-col justify-between bg-lightGrayish text-[#455454] overflow-y-scroll">
      <div>
        <div className="mb-10 w-40">
          <Link to="/">
            <img src={companyLogo} alt="Scrutz" className="cursor-pointer" />
          </Link>
        </div>

        <div className="mt-[70px]">
          <Link to="/createNewCampaign">
            <Button className="w-full">
              <span>+ New Campaign</span>
            </Button>
          </Link>
        </div>
        <div>
          <span>
            <RenderLinks
              data={navLinks}
              activeLink={activeLink}
              setActiveLink={setActiveLink}
            />
          </span>
        </div>

        <div className="bg-white rounded  mt-6 py-8 px-8 flex flex-col justify-center items-center text-center">
          <img src={helpImg} className="w-6 h-6" />
          <div className="mt-1 mb-4">
            <span className="text-sm">Need help?</span>
            <p className="text-xs text-gray mt-1">
              We’re readily available to provide help
            </p>
          </div>

          <Link to="/support">
            <Button
              variant="outline"
              className="border-darkCyan text-darkCyan hover:bg-darkCyan hover:text-white"
            >
              Get Help
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DesktopSidebar;

const RenderLinks = ({ data, activeLink, setActiveLink }) => {
  const greenFilterStyle = {
    filter: "brightness(0.75) sepia(1) hue-rotate(170deg) saturate(5)",
  };

  return (
    <>
      {data.map((link, index) => (
        <div
          key={index}
          className={`flex space-x-4 items-center mt-6 px-10 py-2 cursor-pointer rounded-lg duration-500 hover:bg-white ${
            activeLink === link.url ? "bg-white text-darkCyan" : ""
          }`}
          onClick={() => setActiveLink(link.url)}
        >
          <img
            src={link.icon}
            className="h-6 w-6"
            style={activeLink === link.url ? greenFilterStyle : {}}
          />

          <Link to={link.url} className="text-sm">
            {link.title}
          </Link>
        </div>
      ))}
    </>
  );
};
