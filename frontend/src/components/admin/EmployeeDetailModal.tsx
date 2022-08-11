import { FC, Dispatch, SetStateAction, useState, useEffect } from "react";
import { Typography, Box, Modal, TextField, Button, Stack } from "@mui/material";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { EmployeeDataType, EmployeeDetailType } from "./type";

const styles = {
  container: { width: "100vw", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" },
  contentContainer: {
    backgroundColor: "white",
    width: "40%",
    padding: 5,
    display: "flex",
    flexDirection: "column",
  },
};

export const EmployeeDetail: FC = ({ modal, setModal, data }: EmployeeDetailType) => {
  // const [birthDay, setBirthDay] = useState<Date | null>(new Date());
  const [employee, setEmployee] = useState<EmployeeDataType>();

  useEffect(() => {
    setEmployee(data);
  }, [data]);

  const handleChange = (val, key) => {
    setEmployee({ ...employee, [key]: val });
  };

  const updateData = () => {
    console.log("update data");
  };

  const deleteData = () => {
    console.log("delete data");
  };

  // console.log(birthDay.toISOString().slice(0, 10).split("-").join("/"));

  if (!employee) return <></>;
  console.log(employee.name);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Modal
        open={modal}
        onClose={() => setModal(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={styles.container}
      >
        <Box sx={styles.contentContainer}>
          <Stack spacing={2}>
            <Typography textAlign={"center"} variant="h5">
              Add Employee
            </Typography>
            <TextField label="Name" value={employee.name} onChange={e => handleChange(e.target.value, "name")} />
            <TextField
              label="Phone Number"
              value={employee.phone}
              onChange={e => handleChange(e.target.value, "phone")}
            />
            <TextField label="Email" value={employee.email} onChange={e => handleChange(e.target.value, "email")} />
            <TextField label="Role" value={employee.role} onChange={e => handleChange(e.target.value, "role")} />
            <DesktopDatePicker
              label="Birthday"
              inputFormat="yyyy/MM/dd"
              value={employee.birthday}
              // onChange={setBirthDay}
              renderInput={params => <TextField {...params} />}
            />
            <Stack direction={"row"} spacing={2} justifyContent={"center"}>
              <Button variant="contained" onClick={updateData}>
                Update
              </Button>
              <Button variant="contained" color="error" onClick={deleteData}>
                Delete
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Modal>
    </LocalizationProvider>
  );
};

export default EmployeeDetail;
