import { Button } from "@/components/ui/button";
import { useGlobalContext } from "@/context/Context";
import { Link } from "react-router-dom";

const ConfirmDelete = () => {
  const { deleteCampaign, setConfirmDeleteModal, campaignNameToDelete } =
    useGlobalContext();
  return (
    <div className="bg-white p-16 rounded shadow-lg text-center flex flex-col items-center justify-center">
      <p className="my-12 text-base font-semibold">Stop Campaign</p>
      <p className="text-sm text-gray">
        Are You sure you want to delete {campaignNameToDelete}? <br /> This
        action cannot be undone.
      </p>

      <div className="mt-12 flex gap-4">
        <Button
          onClick={() => setConfirmDeleteModal(false)}
          size="lg"
          variant="outline"
          className="border-black"
        >
          Cancel
        </Button>
        <Button
          onClick={deleteCampaign}
          size="lg"
          className="bg-red hover:bg-red/90"
        >
          Delete
        </Button>
      </div>
    </div>
  );
};

export default ConfirmDelete;
