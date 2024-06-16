import { Link } from "react-router-dom";
import companyLogo from "../assets/scrutz-logo.png";
import { navLinks } from "@/data";

const Sidebar = () => {
  return (
    <div className="w-[300px] border-r h-screen py-6 px-8 flex flex-col justify-between">
      <div>
        <div className="mb-10">
          <Link to="/">
            <img src={companyLogo} alt="Scrutz" className="cursor-pointer" />
          </Link>
        </div>

        <div className="grid gap-y-2">
          <RenderLinks data={navLinks} />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

const RenderLinks = ({ data }) => {
  return (
    <>
      {data.map((link, index) => (
        <div className="flex space-x-4 items-center py-3 cursor-pointer rounded-lg px-4 duration-500 sticky top-0">
          <img src={link.icon} />
          <Link key={index} to={link.url}>
            {link.title}
          </Link>
        </div>
      ))}
    </>
  );
};
