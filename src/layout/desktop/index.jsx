import DesktopSidebar from "./Sidebar";
import Header from "./Header";
import { useGlobalContext } from "@/context/Context";
import CreateNewCampaign from "@/pages/custom/CreateNewCampaign";

const index = ({ children }) => {
  const { newCampaign } = useGlobalContext();

  return (
    <div className="hidden lg:flex h-screen overflow-hidden">
      <DesktopSidebar />
      <div className="w-full">
        <Header />

        <div className="h-screen overflow-y-scroll pb-32 pt-10">
          <div className="container">
            {newCampaign ? <CreateNewCampaign /> : <div>{children}</div>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
