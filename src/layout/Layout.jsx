import { Outlet } from "react-router-dom";
import DesktopLayout from "./desktop";
import { useGlobalContext } from "@/context/Context";
import CampaignSuccessModal from "@/pages/custom/CampaignSuccessModal";

const Layout = () => {
  const { showCampaignSuccessModal } = useGlobalContext();

  return (
    <div className="bg-white font-nunito">
      {showCampaignSuccessModal ? (
        <CampaignSuccessModal />
      ) : (
        <>
          <DesktopLayout>
            <Outlet />
          </DesktopLayout>
        </>
      )}
    </div>
  );
};

export default Layout;
