import { useGlobalContext } from "@/context/Context";
import SectionTitle from "./SectionTitle";
import { IoMdArrowBack } from "react-icons/io";

const CampaignInfo = () => {
  const { selectedCampaign, openDetailView, setSelectedCampaign } =
    useGlobalContext();

  return (
    <div>
      <div>
        <button
          onClick={() => setSelectedCampaign(null)}
          className="flex items-center"
        >
          <IoMdArrowBack /> Back
        </button>
      </div>

      <div className="flex items-center justify-between">
        <SectionTitle>Campaign Information</SectionTitle>

        <span className="block rounded bg-lightGrayish2 py-2 px-4">
          Campaign Status |{" "}
          <span
            className={`${
              selectedCampaign.campaignStatus === "Active"
                ? "text-green-600"
                : selectedCampaign.campaignStatus === "Inactive"
                ? "text-red"
                : ""
            }`}
          >
            {selectedCampaign.campaignStatus}
          </span>
        </span>
      </div>

      <div>
        <h2>{selectedCampaign.campaignName}</h2>
      </div>
    </div>
  );
};

export default CampaignInfo;

// <div>

// {" "}
// <h2>{selectedCampaign.campaignName}</h2>
// <p>Start Date: {selectedCampaign.startDate}</p>
// <p>Status: {selectedCampaign.campaignStatus}</p>
// {/* Add more details as needed */}
// <button onClick={() => setSelectedCampaign(null)}>Close</button>
// </div>
