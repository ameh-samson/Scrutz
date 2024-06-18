import { Button } from "@/components/ui/button";
import { useGlobalContext } from "@/context/Context";
import { Link } from "react-router-dom";

const ConfirmDelete = () => {
  const { deleteCampaign, setConfirmDeleteModal } = useGlobalContext();
  return (
    <div className="bg-white p-16 rounded shadow-lg text-center flex flex-col items-center justify-center">
      <p className="my-12">Stop Campaign</p>
      <p>
        Are You sure you want to delete MTN campaign? <br /> This action cannot
        be undone.
      </p>

      <Button onClick={() => setConfirmDeleteModal(false)}>Cancel</Button>

      <Button onClick={deleteCampaign}>Delete</Button>
    </div>
  );
};

export default ConfirmDelete;
