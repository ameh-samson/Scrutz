import { Outlet } from "react-router-dom";
import DesktopLayout from "./desktop";
import { useGlobalContext } from "@/context/Context";
import CampaignSuccessful from "@/pages/custom/CampaignSuccessful";

const Layout = () => {
  const { showCampaignSuccessModal } = useGlobalContext();

  return (
    <div className="bg-white font-nunito">
      {showCampaignSuccessModal ? (
        <CampaignSuccessful />
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
