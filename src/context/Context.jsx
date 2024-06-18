import { createContext, useContext, useState, useEffect } from "react";
import api from "@/api";

const GlobalContext = createContext({});

export const ContextProvider = ({ children }) => {
  const [campaigns, setCampaigns] = useState([]);
  const [newCampaign, setNewCampaign] = useState(false);
  const [totalCampaigns, setTotalCampaigns] = useState(0);
  const [totalInactiveCampaigns, setTotalInactiveCampaigns] = useState(0);
  const [totalActiveCampaigns, setTotalActiveCampaigns] = useState(0);

  const fetchData = async () => {
    try {
      const response = await api.get("/Campaign");
      const campaignsData = response.data;
      setCampaigns(campaignsData);
      setTotalCampaigns(campaignsData.length);
      setTotalInactiveCampaigns(
        campaignsData.filter(
          (campaign) => campaign.campaignStatus === "Inactive"
        ).length
      );
      setTotalActiveCampaigns(
        campaignsData.filter((campaign) => campaign.campaignStatus === "active")
          .length
      );
    } catch (error) {
      console.error("Error fetching campaigns:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const contextValue = {
    campaigns,
    newCampaign,
    setNewCampaign,
    totalCampaigns,
    totalInactiveCampaigns,
    totalActiveCampaigns,
  };

  return (
    <GlobalContext.Provider value={contextValue}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
