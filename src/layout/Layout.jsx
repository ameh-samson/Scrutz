import { Outlet } from "react-router-dom";
import DesktopLayout from "./desktop";
import { useGlobalContext } from "@/context/Context";
import CampaignSuccessful from "@/pages/custom/CampaignSuccessful";

const Layout = () => {
  const { showCampaignSuccessModal } = useGlobalContext();

  return (
    <div className="relative bg-white font-nunito">
      <DesktopLayout>
        <Outlet />
      </DesktopLayout>
      {showCampaignSuccessModal && (
        <div className="fixed inset-0 bg-[#FFFFFA] bg-opacity-80 flex items-center justify-center z-50">
          <div>
            <CampaignSuccessful />
          </div>
        </div>
      )}
    </div>
  );
};

export default Layout;
