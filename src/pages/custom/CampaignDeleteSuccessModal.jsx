import { Button } from "@/components/ui/button";
import { useGlobalContext } from "@/context/Context";
import React from "react";
import { Link } from "react-router-dom";

const CampaignDeleteSuccessModal = () => {
  const { setSuccessModal, campaignNameToDelete } = useGlobalContext();
  return (
    <div className="bg-white p-16 rounded shadow-lg text-center flex flex-col items-center justify-center">
      <p className="my-12 text-base font-semibold">Campaign Deleted</p>
      <p className="text-sm text-gray">
        {campaignNameToDelete} campaign has been deleted
      </p>
      <Link to="/campaign">
        <Button
          onClick={() => setSuccessModal(false)}
          size="lg"
          className="mt-12 border-darkCyan text-white hover:bg-darkCyan/90"
        >
          Go Back to campaign list
        </Button>
      </Link>
    </div>
  );
};

export default CampaignDeleteSuccessModal;
