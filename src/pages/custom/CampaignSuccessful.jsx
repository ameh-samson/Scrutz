import { Link } from "react-router-dom";
import successIcon from "../../assets/success.png";

const CampaignSuccessful = () => {
  return (
    <div>
      <div>
        <img src={successIcon} alt="success icon" />
      </div>
      <p>No activity yet. Create anew campaign to get started</p>

      <Link to="/campaign">Go Back to campaign list</Link>
    </div>
  );
};

export default CampaignSuccessful;
