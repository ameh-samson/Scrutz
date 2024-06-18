import { Link } from "react-router-dom";
import successIcon from "../../assets/success.png";
import { Button } from "@/components/ui/button";
import { useGlobalContext } from "@/context/Context";

const CampaignSuccessful = () => {
  const { setShowCampaignSuccessModal } = useGlobalContext();
  return (
    <div className="bg-white p-16 rounded shadow-lg text-center flex flex-col items-center justify-center">
      <div>
        <img src={successIcon} alt="success icon" className="w-[90px]" />
      </div>
      <p className="my-12">Campaign Successfully Created!</p>

      <Link to="/campaign" onClick={() => setShowCampaignSuccessModal(false)}>
        <Button>Go Back to campaign list</Button>
      </Link>
    </div>
  );
};

export default CampaignSuccessful;
