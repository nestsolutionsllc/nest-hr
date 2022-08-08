import { DataGrid, GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import { useState, FC, useEffect } from "react";
import { Typography, Box, Button } from "@mui/material";
import Link from "next/link";
import { TicketListModalType, ticketType, users } from "./type";
import Status from "./TicketListStatus";
import TicketModal from "./TicketListModal";
import Assignee from "./TicketAssignee";

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

const TicketList: FC = () => {
  const [modal, setModal] = useState<TicketListModalType>(false);
  const [selectedRow, setSelectedRow] = useState<ticketType>();
  const [myTickets, setMyTickets] = useState<ticketType[]>([]);
  const [myAssignedTickets, setMyAssignedTickets] = useState<ticketType[]>([]);
  const [user, setUser] = useState("jigmee");
  const columns: GridColDef[] = [
    { field: "type", headerName: "Request type", width: 150 },
    {
      field: "summary",
      headerName: "Summary",
      width: 150,
      renderCell: params => <Typography>{params.value}</Typography>,
    },
    { field: "reporter_id", headerName: "Reporter", width: 150 },
    {
      field: "assignee_id",
      headerName: "Assignee",
      width: 150,
      renderCell: (params: GridRenderCellParams<string>) => {
        return <Assignee value={params.value} currRow={params.row} user={user} setUser={setUser} />;
      },
    },
    {
      field: "status",
      headerName: "Status",
      width: 150,
      renderCell: (params: GridRenderCellParams<string>) => {
        return (
          <Box p={1} style={{ width: "100%  " }}>
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
    },
    {
      field: "created_date",
      headerName: "Created",
      width: 150,
      renderCell: (params: GridRenderCellParams<string>) => <strong>{params.value}</strong>,
    },
    {
      field: "Detail",
      headerName: "Detail",
      width: 150,
      renderCell: (params: GridRenderCellParams<string>) => {
        return (
          <Link href={`/ticketing/${params.row._id}`}>
            <Button>Detail</Button>
          </Link>
        );
      },
    },
  ];
  const getData = async () => {
    const list = await (
      await fetch("https://secure-taiga-55850.herokuapp.com/tickets", {
        mode: "cors", // no-cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({
          id: user,
        }),
      })
    ).json();
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
        <Typography>My tickets</Typography>
        <DataGrid
          checkboxSelection
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
        <Typography>Assigned to me</Typography>
        <DataGrid
          checkboxSelection
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
