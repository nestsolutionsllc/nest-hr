import { DataGrid, GridColDef, GridRenderCellParams, GridSelectedRowCount } from "@mui/x-data-grid";
import { useState, FC } from "react";
import { Typography, Box, Button } from "@mui/material";
import AddEmployeeModal from "./AddEmployeeModal";
import EmployeeDetail from "./EmployeeDetailModal";
import { EmployeeDataType } from "./type";

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
  const [addModal, setAddModal] = useState<boolean>(false);
  const [detailModal, setDetailModal] = useState<boolean>(false);
  const [selectedData, setSelectedData] = useState<EmployeeDataType>();
  const columns: GridColDef[] = [
    { field: "name", headerName: "Name", width: 150, flex: 1 },
    {
      field: "email",
      headerName: "Email",
      width: 150,
      renderCell: params => <Typography>{params.value}</Typography>,
      flex: 1,
    },
    { field: "phone", headerName: "Phone", width: 150, flex: 1 },
    {
      field: "Detail",
      headerName: "Detail",
      width: 150,
      renderCell: (params: GridRenderCellParams<string>) => {
        return <Button onClick={() => setDetailModal(true)}>Detail</Button>;
      },
      flex: 1,
    },
  ];
  const dummyData = [
    {
      name: "Anand-Ochir",
      phone: "90262021",
      email: "ananda@gmail.com",
      birthday: "2004/10/8",
      role: "developer",
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
    {
      name: "Ermuun-Orgil",
      phone: "80188056",
      email: "ermuunee@gmail.com",
      birthday: "2001/10/8",
      role: "developer",
    },
  ];
  return (
    <Box sx={styles.container}>
      <Button onClick={() => setAddModal(true)}>Add Employee</Button>
      <Box sx={styles.contentContainer}>
        <Typography>All employee</Typography>
        <DataGrid
          autoHeight
          rows={dummyData}
          columns={columns}
          getRowId={row => row.phone}
          getRowHeight={() => "auto"}
          onCellKeyDown={(params, events) => events.stopPropagation()}
          sx={styles.dataGrid}
          onSelectionModelChange={phone => {
            const filteredData = dummyData.find(row => row.phone === phone[0]);
            setSelectedData(filteredData);
          }}
        />
      </Box>
      <AddEmployeeModal modal={addModal} setModal={setAddModal} />
      <EmployeeDetail modal={detailModal} setModal={setDetailModal} data={selectedData} />
    </Box>
  );
};

export default GroupList;
