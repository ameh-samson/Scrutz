import { Button } from "@/components/ui/button";
import emptyImg from "../../assets/empty.png";

const NoActivity = () => {
  return (
    <div>
      <img src={emptyImg} alt="empty" className="" />

      <Button>
        <span>+ New Campaign</span>
      </Button>
    </div>
  );
};

export default NoActivity;
