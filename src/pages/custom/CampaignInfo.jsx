import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import SectionTitle from "./SectionTitle";
import { IoMdArrowBack } from "react-icons/io";
import { useGlobalContext } from "@/context/Context";

const CampaignInfo = () => {
  const { id } = useParams();
  const { fetchCampaignDetails } = useGlobalContext();
  const [campaignDetail, setCampaignDetail] = useState(null);

  useEffect(() => {
    const getCampaignDetails = async () => {
      const details = await fetchCampaignDetails(id);
      setCampaignDetail(details);
    };
    getCampaignDetails();
  }, [id, fetchCampaignDetails]);

  if (!campaignDetail) {
    return <div>Loading...</div>;
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
