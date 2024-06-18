import { Link } from "react-router-dom";
import successIcon from "../../assets/success.png";
import { Button } from "@/components/ui/button";
import { useGlobalContext } from "@/context/Context";

const CampaignSuccessful = () => {
  const { setShowCampaignSuccessModal } = useGlobalContext();
  return (
    <div>
      <div>
        <img src={successIcon} alt="success icon" />
      </div>
      <p>No activity yet. Create anew campaign to get started</p>

      <Link to="/campaign" onClick={() => setShowCampaignSuccessModal(false)}>
        <Button>Go Back to campaign list</Button>
      </Link>
    </div>
  );
};

export default CampaignSuccessful;
