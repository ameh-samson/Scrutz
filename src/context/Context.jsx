import { createContext, useContext, useState, useEffect } from "react";
import api from "@/api";

const GlobalContext = createContext({});

export const ContextProvider = ({ children }) => {
  const [campaigns, setCampaigns] = useState([]);
  const [totalCampaigns, setTotalCampaigns] = useState(0);
  const [totalInactiveCampaigns, setTotalInactiveCampaigns] = useState(0);
  const [totalActiveCampaigns, setTotalActiveCampaigns] = useState(0);
  const [selectedCampaign, setSelectedCampaign] = useState(null);
  const [showCampaignSuccessModal, setShowCampaignSuccessModal] =
    useState(false);
  const [campaignDetail, setCampaignDetail] = useState(null);

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

  // Function to fetch campaign details by ID
  const fetchCampaignDetails = async (id) => {
    try {
      const response = await api.get(`/Campaign/${id}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching campaign details:", error);
    }
  };

  // Function to delete a campaign
  const deleteCampaign = async (campaignId) => {
    try {
      await api.delete(`/Campaign/${campaignId}`);
      // After successful deletion, refresh campaign data
      fetchData();
    } catch (error) {
      console.error("Error deleting campaign:", error);
    }
  };

  const contextValue = {
    campaigns,
    totalCampaigns,
    totalInactiveCampaigns,
    totalActiveCampaigns,
    selectedCampaign,
    setSelectedCampaign,
    showCampaignSuccessModal,
    setShowCampaignSuccessModal,
    deleteCampaign,
    fetchCampaignDetails,
    fetchData,
    campaignDetail,
    setCampaignDetail,
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
