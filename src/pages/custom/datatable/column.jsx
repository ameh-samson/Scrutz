import viewIcon from "../../../assets/view.png";
import editIcon from "../../../assets/edit.png";
import deleteIcon from "../../../assets/delete.png";
import { toTitleCase } from "@/lib/utils";
import { Link } from "react-router-dom";
import { useState } from "react";

import { formatDate } from "@/lib/utils";
import { useGlobalContext } from "@/context/Context";

export const columns = [
  {
    accessorKey: "s/n",
    header: "S/N",
    cell: ({ row }) => row.index + 1,
  },
  {
    accessorKey: "campaignName",
    header: "Campaign Name",
    cell: ({ row }) => {
      const name = row.original.campaignName;
      return toTitleCase(name);
    },
  },

  {
    accessorKey: "startDate",
    header: "Start Date",
    cell: ({ row }) => formatDate(row.original.startDate),
  },
  {
    accessorKey: "campaignStatus",
    header: "Status",
    cell: ({ row }) => {
      const status = row.original.campaignStatus;
      return (
        <span
          className={`font-bold ${
            status === "Active"
              ? "text-green-500"
              : status === "Inactive"
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
      const { selectedCampaign, openDetailView } = useGlobalContext();

      return (
        <div className="flex items-center gap-6">
          <button onClick={() => openDetailView(row.original)}>
            <img src={viewIcon} alt="view" className="w-5" />
          </button>

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
