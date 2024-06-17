"use client";
import { MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getInitials } from "@/utils";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// Sample data structure for the students
const studentsData = [
  // Add sample data here or import from a separate file
];

export const columns = [
  {
    accessorKey: "firstName",
    header: "First Name",
  },
  {
    accessorKey: "lastName",
    header: "Last Name",
  },
  {
    accessorKey: "userName",
    header: "username",
  },

  {
    accessorKey: "parent",
    header: "Parent Email",
  },

  {
    accessorKey: "course",
    header: "Course ID",
  },
  {
    accessorKey: "instructor",
    header: "Instructor Email",
  },
  {
    accessorKey: "stage",
    header: "Stage",
  },
  {
    accessorKey: "level",
    header: "Level",
  },

  {
    id: "actions",
    cell: ({ row }) => {
      const students = row.original;

      return (
        <div className="flex gap-3">
          <Link href={`/students/${row.original.lastName}`}>
            <Button size="sm">View</Button>
          </Link>
        </div>
      );
    },
  },
];
