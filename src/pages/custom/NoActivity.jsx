import { Button } from "@/components/ui/button";
import emptyImg from "../../assets/empty.png";

const NoActivity = () => {
  return (
    <div>
      <img src={emptyImg} alt="empty" className="w-1.5 h-full" />

      <Button>
        <span>+ New Campaign</span>
      </Button>
    </div>
  );
};

export default NoActivity;
