import { DataGrid, GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import { useState, FC, useEffect } from "react";
import { Typography, Box, Button } from "@mui/material";
import Link from "next/link";
import { TicketListModalType, TicketType, users } from "./type";
import Status from "./TicketListStatus";
import TicketModal from "./TicketListModal";
import Assignee from "./TicketAssignee";
import fetchTicket from "./fetch-utility";
import RequestBtn from "./request";

const styles = {
  container: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    // backgroundColor: "white",
  },
  header: { color: "#6c757d", fontSize: 14, fontWeight: "bold" },
  contentContainer: { width: "100%", mt: 5, px: 7 },
  dataGrid: {
    my: 3,
    boxShadow: "0px 0px 15px rgba(0,0,0,0.05)",
    border: 0,
    padding: "0 10px",
    backgroundColor: "white",
    borderRadius: 3,
    borderColor: "primary.light",
    "& .MuiDataGrid-cell:hover": {
      color: "primary.main",
    },
    ".MuiDataGrid-columnSeparator": {
      display: "none",
    },
    "&.MuiDataGrid-root": {
      borderRadius: 0,
    },
  },
  img: { borderRadius: 40 },
  bold: { fontWeight: "bold" },
  myTicketsHeader: { display: "flex", width: "100%", justifyContent: "space-between" },
  date: { color: "#5e6c84" },
  statusContainer: { width: "100%", p: 1 },
};

const TicketList: FC = () => {
  const [modal, setModal] = useState<TicketListModalType>(false);
  const [selectedRow, setSelectedRow] = useState<TicketType>();
  const [myTickets, setMyTickets] = useState<TicketType[]>([]);
  const [myAssignedTickets, setMyAssignedTickets] = useState<TicketType[]>([]);
  const [user, setUser] = useState("jigmee");
  const columns: GridColDef[] = [
    {
      field: "type",
      headerName: "Request type",
      width: 150,
      renderHeader: () => <Typography sx={styles.header}>Request Type</Typography>,
    },
    {
      field: "summary",
      headerName: "Summary",
      minWidth: 150,
      renderCell: params => <Typography>{params.value}</Typography>,
      renderHeader: () => <Typography sx={styles.header}>Summary</Typography>,
      flex: 1,
    },
    {
      field: "reporter_id",
      headerName: "Reporter",
      minWidth: 150,
      flex: 1,
      renderHeader: () => <Typography sx={styles.header}>Reporter</Typography>,
    },
    {
      field: "assignee_id",
      headerName: "Assignee",
      minWidth: 150,
      flex: 1,
      renderCell: (params: GridRenderCellParams<string>) => {
        return <Assignee value={params.value} currRow={params.row} user={user} setUser={setUser} />;
      },
      renderHeader: () => <Typography sx={styles.header}>Assignee</Typography>,
    },
    {
      field: "status",
      headerName: "Status",
      minWidth: 150,
      flex: 1,
      renderCell: (params: GridRenderCellParams<string>) => {
        return (
          <Box sx={styles.statusContainer}>
            <Status
              ticket={params.row}
              currValue={params.value}
              setModal={setModal}
              setSelectedRow={setSelectedRow}
              changeRow={true}
            />
          </Box>
        );
      },
      renderHeader: () => <Typography sx={styles.header}>Status</Typography>,
    },
    {
      field: "created_date",
      headerName: "Created",
      minWidth: 150,
      flex: 1,
      renderCell: () => <Typography sx={styles.date}>11/Aug/2022</Typography>,
      renderHeader: () => <Typography sx={styles.header}>Date</Typography>,
    },
    {
      field: "Detail",
      headerName: "Detail",
      width: 150,
      renderCell: (params: GridRenderCellParams<string>) => {
        return (
          <Link href={`/ticketing/${params.row._id}`} data-testid={"detailBTN"}>
            <Button>Detail</Button>
          </Link>
        );
      },
      renderHeader: () => <Typography sx={styles.header}>Detail</Typography>,
    },
  ];
  const getData = async () => {
    const list = await fetchTicket(`${process.env.TICKET_SYSTEM_ENDPOINT_URL}/tickets`, "POST", {
      id: user,
    });
    setMyTickets(list.filter(item => item.reporter_id === user));
    setMyAssignedTickets(list.filter(item => item.assignee_id === user));
  };
  useEffect(() => {
    getData();
  }, [user]);
  return (
    <Box sx={styles.container}>
      <Box>
        {users.map(item => {
          return <Button onClick={() => setUser(item.name)}>{item.name}</Button>;
        })}
      </Box>
      <Box sx={styles.contentContainer}>
        <Box sx={styles.myTicketsHeader}>
          <Typography sx={styles.bold}>My tickets</Typography>
          <RequestBtn user={user} />
        </Box>
        <DataGrid
          autoHeight
          rows={myTickets}
          columns={columns}
          getRowId={row => row._id}
          getRowHeight={() => "auto"}
          onCellKeyDown={(params, events) => events.stopPropagation()}
          sx={styles.dataGrid}
        />
        <TicketModal modal={modal} setModal={setModal} selectedRow={selectedRow} user={user} />
      </Box>
      <Box sx={styles.contentContainer}>
        <Typography sx={styles.bold}>Assigned to me</Typography>
        <DataGrid
          autoHeight
          getRowId={row => row._id}
          rows={myAssignedTickets}
          columns={columns}
          getRowHeight={() => "auto"}
          onCellKeyDown={(params, events) => events.stopPropagation()}
          sx={styles.dataGrid}
        />
        <TicketModal modal={modal} setModal={setModal} selectedRow={selectedRow} user={user} />
      </Box>
    </Box>
  );
};

export default TicketList;
// accept reject
// redirect
// history
