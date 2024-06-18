import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import api from "@/api"; // Ensure this path is correct
import SectionTitle from "./SectionTitle";
import { IoMdArrowBack } from "react-icons/io";
import { useGlobalContext } from "@/context/Context";

const CampaignInfo = () => {
  const { id } = useParams();
  const { selectedCampaign, setSelectedCampaign } = useGlobalContext();
  const [campaignDetail, setCampaignDetail] = useState(null);

  const fetchCampaignDetails = async () => {
    try {
      const response = await api.get(`/Campaign/${id}`);
      setCampaignDetail(response.data);
    } catch (error) {
      console.error("Error fetching campaign details:", error);
    }
  };

  useEffect(() => {
    if (!selectedCampaign) {
      fetchCampaignDetails();
    } else {
      setCampaignDetail(selectedCampaign);
    }
  }, [id, selectedCampaign]);

  if (!campaignDetail) {
    return <div>Loading...</div>; // Loading state
  }

  return (
    <div>
      <div>
        <Link to="/campaign">
          <button className="flex items-center">
            <IoMdArrowBack /> Back
          </button>
        </Link>
      </div>

      <div className="flex items-center justify-between">
        <SectionTitle>Campaign Information</SectionTitle>

        <span className="block rounded bg-lightGrayish2 py-2 px-4">
          Campaign Status |{" "}
          <span
            className={`${
              campaignDetail.campaignStatus === "Active"
                ? "text-green-600"
                : campaignDetail.campaignStatus === "Inactive"
                ? "text-red"
                : ""
            }`}
          >
            {campaignDetail.campaignStatus}
          </span>
        </span>
      </div>

      <div>
        <h2>{campaignDetail.campaignName}</h2>
      </div>
    </div>
  );
};

export default CampaignInfo;
