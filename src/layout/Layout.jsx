import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";

const Layout = () => {
  return (
    <div className="">
      <Sidebar />
      <Header />
      <main className="">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
