import { DataGrid, GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import { useState, FC, useEffect } from "react";
import { Typography, Box, Button, Modal } from "@mui/material";
import Link from "next/link";
import { TicketListModalType, ticketType, users } from "../ticket/type";
import Status from "../ticket/TicketListStatus";
import TicketModal from "../ticket/TicketListModal";
import Assignee from "../ticket/TicketAssignee";
import AddEmployeeModal from "./AddEmployeeModal";

const styles = {
  container: { width: "100%", display: "flex", flexDirection: "column", alignItems: "center" },
  contentContainer: { width: 1150, mt: 5 },
  dataGrid: {
    my: 3,
    boxShadow: 20,
    border: 0,
    padding: "0 10px",
    backgroundColor: "white",
    borderRadius: 3,
    borderColor: "primary.light",
    "& .MuiDataGrid-cell:hover": {
      color: "primary.main",
    },
  },
  img: { borderRadius: 40 },
};

const GroupList: FC = () => {
  const [modal, setModal] = useState<boolean>(false);
  const [user, setUser] = useState("jigmee");
  const columns: GridColDef[] = [
    { field: "name", headerName: "Name", width: 150 },
    {
      field: "email",
      headerName: "Email",
      width: 150,
      renderCell: params => <Typography>{params.value}</Typography>,
    },
    { field: "phone", headerName: "Phone", width: 150 },
    {
      field: "groups",
      headerName: "Groups",
      width: 150,
      renderCell: (params: GridRenderCellParams<string>) => {
        return <Assignee value={params.value} currRow={params.row} user={user} setUser={setUser} />;
      },
    },
    {
      field: "Detail",
      headerName: "Detail",
      width: 150,
      renderCell: (params: GridRenderCellParams<string>) => {
        return <Button onClick={() => console.log("detail")}>Detail</Button>;
      },
    },
  ];
  const dummyData = [
    {
      name: "Anand-Ochir",
      phone: "90262021",
      email: "ananda@gmail.com",
      // groups: {
      //   salary: {
      //     read: true,
      //     write: true,
      //   },
      //   "profile-all": {
      //     read: true,
      //     write: true,
      //   },
      // },
    },
  ];
  return (
    <Box sx={styles.container}>
      <Button onClick={() => setModal(true)}>Add Group</Button>
      <Box sx={styles.contentContainer}>
        <Typography>All groups</Typography>
        <DataGrid
          checkboxSelection
          autoHeight
          rows={dummyData}
          columns={columns}
          getRowId={row => row.phone}
          getRowHeight={() => "auto"}
          onCellKeyDown={(params, events) => events.stopPropagation()}
          sx={styles.dataGrid}
        />
      </Box>
      <AddEmployeeModal modal={modal} setModal={setModal} />
    </Box>
  );
};

export default GroupList;
// accept reject
// redirect
// history
