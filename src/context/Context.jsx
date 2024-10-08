import { createContext, useContext, useState, useEffect } from "react";
import api from "@/api";

const GlobalContext = createContext({});

export const ContextProvider = ({ children }) => {
  const [activeLink, setActiveLink] = useState(location.pathname);
  const [campaigns, setCampaigns] = useState([]);
  const [totalCampaigns, setTotalCampaigns] = useState(0);
  const [totalInactiveCampaigns, setTotalInactiveCampaigns] = useState(0);
  const [totalActiveCampaigns, setTotalActiveCampaigns] = useState(0);
  const [showCampaignSuccessModal, setShowCampaignSuccessModal] =
    useState(false);
  const [campaignDetail, setCampaignDetail] = useState(null);
  const [confirmDeleteModal, setConfirmDeleteModal] = useState(false);
  const [successModal, setSuccessModal] = useState(false);
  const [successfullyEditedModal, setSuccessfullyEditedModal] = useState(false);
  const [selectedCampaignId, setSelectedCampaignId] = useState(null);
  const [viewCampaignId, setViewCampaignId] = useState(null);
  const [campaignNameToDelete, setCampaignNameToDelete] = useState("");
  const [selectedCampaign, setSelectedCampaign] = useState(null);
  const [formEditable, setFormEditable] = useState(false);

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

  // fetches the campaign data
  useEffect(() => {
    fetchData();
  }, []);

  // open the detailed campaign
  const openDetailView = (campaign, campaignId) => {
    setSelectedCampaign(campaign);
    setViewCampaignId(campaignId);
  };

  // Function to fetch campaign details by ID
  const fetchCampaignDetails = async (id) => {
    try {
      const response = await api.get(`/Campaign/${id}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching campaign details:", error);
    }
  };

  // Function to handle delete button click
  const handleDeleteClick = (campaignId, campaignName) => {
    setSelectedCampaignId(campaignId);
    setCampaignNameToDelete(campaignName);
    setConfirmDeleteModal(true);
  };

  const deleteCampaign = async () => {
    try {
      await api.delete(`/Campaign/${selectedCampaignId}`);
      setConfirmDeleteModal(false);
      setSelectedCampaign(false);
      setSuccessModal(true);
      fetchData();
    } catch (error) {
      console.error("Error deleting campaign:", error);
    }
  };

  const contextValue = {
    activeLink,
    setActiveLink,
    campaigns,
    totalCampaigns,
    totalInactiveCampaigns,
    totalActiveCampaigns,
    showCampaignSuccessModal,
    setShowCampaignSuccessModal,
    fetchCampaignDetails,
    fetchData,
    campaignDetail,
    setCampaignDetail,
    confirmDeleteModal,
    handleDeleteClick,
    deleteCampaign,
    setConfirmDeleteModal,
    successModal,
    setSuccessModal,
    campaignNameToDelete,
    openDetailView,
    selectedCampaign,
    viewCampaignId,
    formEditable,
    setFormEditable,
    successfullyEditedModal,
    setSuccessfullyEditedModal,
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
