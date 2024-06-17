import DesktopSidebar from "./Sidebar";
import Header from "./Header";

const index = ({ children }) => {
  return (
    <div className="hidden lg:flex h-screen overflow-hidden">
      <DesktopSidebar />
      <div className="w-full">
        <Header />

        <div className="h-screen pb-32 pt-10">
          <div className="container">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default index;
