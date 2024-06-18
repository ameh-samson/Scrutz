import { Outlet } from "react-router-dom";
import DesktopLayout from "./desktop";
import { useGlobalContext } from "@/context/Context";
import CampaignSuccessful from "@/pages/custom/CampaignSuccessful";
import ConfirmDelete from "@/pages/custom/ConfirmDelete";
import CampaignDeleteSuccessModal from "@/pages/custom/CampaignDeleteSuccessModal";

const Layout = () => {
  const { showCampaignSuccessModal, confirmDeleteModal, successModal } =
    useGlobalContext();

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

      {confirmDeleteModal && (
        <div className="fixed inset-0 bg-[#FFFFFA] bg-opacity-80 flex items-center justify-center z-50">
          <div>
            <ConfirmDelete />
          </div>
        </div>
      )}

      {successModal && (
        <div className="fixed inset-0 bg-[#FFFFFA] bg-opacity-80 flex items-center justify-center z-50">
          <div>
            <CampaignDeleteSuccessModal />
          </div>
        </div>
      )}
    </div>
  );
};

export default Layout;
