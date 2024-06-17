import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import emptyImg from "../../assets/empty.png";
import { useGlobalContext } from "@/context/Context";

const NoActivity = () => {
  const { newCampaign, setNewCampaign } = useGlobalContext();

  return (
    <div className="flex flex-col items-center justify-center">
      <img src={emptyImg} alt="empty" className="w-[462px]" />

      <div className="mt-11 text-center">
        <p>No activity yet. Create anew campaign to get started</p>

        <Button onClick={() => setNewCampaign(!newCampaign)} className="mt-9">
          <span>+ New Campaign</span>
        </Button>
      </div>
    </div>
  );
};

export default NoActivity;
