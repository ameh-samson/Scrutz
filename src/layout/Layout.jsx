import { Outlet } from "react-router-dom";
import DesktopLayout from "./desktop";

const Layout = ({ children }) => {
  return (
    <div className="bg-white font-nunito">
      <DesktopLayout>
        <Outlet />
      </DesktopLayout>
    </div>
  );
};

export default Layout;
