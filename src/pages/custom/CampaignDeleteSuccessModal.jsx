import { Button } from "@/components/ui/button";
import { useGlobalContext } from "@/context/Context";
import React from "react";
import { Link } from "react-router-dom";

const CampaignDeleteSuccessModal = () => {
  const { setSuccessModal } = useGlobalContext(``);
  return (
    <div className="bg-white p-16 rounded shadow-lg text-center flex flex-col items-center justify-center">
      <p className="my-12">Campaign Deleted</p>
      <p>MTN campaign has been deleted</p>

      <Button
        onClick={() => setSuccessModal(false)}
        size="lg"
        variant="outline"
        className="border-darkCyan text-darkCyan hover:bg-darkCyan hover:text-white"
      >
        Cancel
      </Button>
    </div>
  );
};

export default CampaignDeleteSuccessModal;
