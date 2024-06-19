import { Outlet } from "react-router-dom";
import DesktopLayout from "./desktop";
import { useGlobalContext } from "@/context/Context";
import ConfirmDelete from "@/pages/custom/ConfirmDelete";
import SuccessModal from "@/pages/custom/SuccessModal";
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
            <SuccessModal state="created" />
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
