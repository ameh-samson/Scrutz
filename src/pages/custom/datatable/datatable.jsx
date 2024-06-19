import { useState } from "react";
import {
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { useGlobalContext } from "@/context/Context";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { createTheme, colors, ThemeProvider } from "@mui/material";

const theme = createTheme({
  palette: {
    secondary: {
      main: "#247B7B",
    },
  },
});

export function DataTable({ columns, data }) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const {
    campaigns,
    totalCampaigns,
    totalInactiveCampaigns,
    totalActiveCampaigns,
  } = useGlobalContext();

  // Calculate the items to display on the current page
  const offset = (currentPage - 1) * itemsPerPage;

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
    // Synchronize with the table pagination
    table.setPageIndex(value - 1);
  };

  return (
    <div>
      <div className="rounded-md border">
        <Table>
          <TableHeader className="font-bold text-xs text-darkGrayishBlue bg-lightGrayish">
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody className="text-sm text-gray">
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center text-gray"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {/* Pagination */}

      <div className="flex items-center justify-between space-x-2 mt-8">
        <ThemeProvider theme={theme}>
          <Stack spacing={2}>
            <Pagination
              count={Math.ceil(totalCampaigns / itemsPerPage)}
              page={currentPage}
              onChange={handlePageChange}
              color="primary"
              sx={{
                "& .Mui-selected": {
                  bgcolor: theme.palette.secondary.main,
                },
              }}
            />
          </Stack>
        </ThemeProvider>

        <p className="text-sm font-medium">
          Showing
          <span className="ml-1">
            {Math.min(offset + itemsPerPage, totalCampaigns)}
          </span>{" "}
          of {totalCampaigns} results
        </p>
      </div>
    </div>
  );
}
