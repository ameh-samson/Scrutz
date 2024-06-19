import { Link } from "react-router-dom";
import successIcon from "../../assets/success.png";
import { Button } from "@/components/ui/button";
import { useGlobalContext } from "@/context/Context";

const SuccessModal = ({ state, onClick }) => {
  const { setShowCampaignSuccessModal } = useGlobalContext();
  const handleClose = (onClick) => {
    onClick(false);
  };

  return (
    <div className="bg-white p-16 rounded shadow-lg text-center flex flex-col items-center justify-center">
      <div>
        <img src={successIcon} alt="success icon" className="w-[90px]" />
      </div>
      <p className="my-12 text-sm text-gray">Campaign Successfully {state}!</p>

      <Link to="/campaign" onClick={handleClose}>
        <Button>Go Back to campaign list</Button>
      </Link>
    </div>
  );
};

export default SuccessModal;
