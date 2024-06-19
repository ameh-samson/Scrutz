import { useState } from "react";
import companyLogo from "../../assets/scrutz-logo.png";
import { Link } from "react-router-dom";
import { CiMenuBurger } from "react-icons/ci";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { navLinks } from "@/data";
import { useGlobalContext } from "@/context/Context";

const MobileNav = () => {
  const [open, setOpen] = useState(false);

  const { activeLink, setActiveLink } = useGlobalContext();

  const greenFilterStyle = {
    filter: "brightness(0.75) sepia(1) hue-rotate(170deg) saturate(5)",
  };
  return (
    <div className="lg:hidden">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button
            className="bg-transparent border-none hover:bg-transparent text-gray-800 p-0 shadow-none"
            variant="outline"
          >
            {/* menu icon */}
            <CiMenuBurger className="w-8 h-8" />
          </Button>
        </SheetTrigger>
        <SheetContent className="bg-lightGrayish">
          <SheetHeader className="text-left">
            <SheetTitle>
              <Link to="/" className="w-40">
                <img
                  src={companyLogo}
                  alt="Scrutz"
                  className="cursor-pointer"
                />
              </Link>
            </SheetTitle>
          </SheetHeader>

          <Accordion type="single" collapsible className="w-full">
            <nav className="flex flex-col mt-8 lg:hidden">
              {navLinks.map((link, index) => (
                <div
                  key={index}
                  className={`flex space-x-4 items-center mt-6 px-6 py-2 cursor-pointer rounded-lg duration-500 hover:bg-white ${
                    activeLink === link.url ? "bg-white text-darkCyan" : ""
                  }`}
                  onClick={() => setActiveLink(link.url)}
                >
                  <img
                    src={link.icon}
                    className="h-6 w-6"
                    style={activeLink === link.url ? greenFilterStyle : {}}
                  />

                  <Link
                    to={link.url}
                    className="text-sm"
                    onClick={() => setOpen(false)}
                  >
                    {link.title}
                  </Link>
                </div>
              ))}
            </nav>
          </Accordion>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNav;
