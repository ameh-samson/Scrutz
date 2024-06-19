import React from "react";
import Header from "./Header";
import CreateNewCampaign from "@/pages/custom/CreateNewCampaign";
import CampaignInfo from "@/pages/custom/CampaignInfo";
import { useGlobalContext } from "@/context/Context";

const MobileLayout = ({ children }) => {
  const { newCampaign, selectedCampaign } = useGlobalContext();

  return (
    <div className="lg:hidden h-screen overflow-hidden">
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

export default MobileLayout;
