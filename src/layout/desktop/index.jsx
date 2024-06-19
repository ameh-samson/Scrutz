import DesktopSidebar from "./Sidebar";
import Header from "./Header";
import { useGlobalContext } from "@/context/Context";
import CreateNewCampaign from "@/pages/custom/CreateNewCampaign";
import CampaignInfo from "@/pages/custom/CampaignInfo";

const index = ({ children }) => {
  const { newCampaign, selectedCampaign } = useGlobalContext();

  return (
    <div className="hidden lg:flex h-screen overflow-hidden">
      <DesktopSidebar />
      <div className="w-full">
        <Header />

        <div className="h-screen overflow-y-scroll pb-32 pt-10">
          <div className="container">
            {newCampaign ? (
              <CreateNewCampaign />
            ) : selectedCampaign ? (
              <CampaignInfo />
            ) : (
              <>{children}</>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
