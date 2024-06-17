import viewIcon from "../../../assets/view.png";
import editIcon from "../../../assets/edit.png";
import deleteIcon from "../../../assets/delete.png";
import { toTitleCase } from "@/lib/utils";
import { Link } from "react-router-dom";

export const columns = [
  {
    accessorKey: "s/n",
    header: "S/N",
    cell: ({ row }) => row.index + 1,
  },
  {
    accessorKey: "campaignName",
    header: "Campaign Name",
  },

  {
    accessorKey: "startDate",
    header: "Start Date",
  },
  {
    accessorKey: "campaignStatus",
    header: "Status",
    cell: ({ row }) => {
      const status = row.original.campaignStatus;
      return (
        <span
          className={`font-bold ${
            status === "active"
              ? "text-green-500"
              : status === "inactive"
              ? "text-red"
              : ""
          }`}
        >
          {status.toUpperCase()}
        </span>
      );
    },
  },

  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => {
      const payment = row.original;

      return (
        <div className="flex items-center gap-6">
          <Link to={``}>
            <button>
              <img src={viewIcon} alt="view" className="w-5" />
            </button>
          </Link>

          <button>
            <img src={editIcon} alt="view" className="w-4" />
          </button>
          <button>
            <img src={deleteIcon} alt="view" className="w-5" />
          </button>
        </div>
      );
    },
  },
];
