import { FC, Dispatch, SetStateAction, useState } from "react";
import { Typography, Box, Modal, TextField, Button, Stack } from "@mui/material";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";

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

type AddEmployeeModalType = {
  modal: boolean;
  setModal: Dispatch<SetStateAction<boolean>>;
};

export const AddEmployeeModal: FC = ({ modal, setModal }: AddEmployeeModalType) => {
  const [birthDay, setBirthDay] = useState<Date | null>(new Date());

  const handleChange = (newValue: Date | null) => {
    setBirthDay(newValue);
  };

  // console.log(birthDay.toISOString().slice(0, 10).split("-").join("/"));

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
            <TextField label="Name" />
            <TextField label="Phone" />
            <TextField label="Email" />
            <TextField label="Role" />
            <DesktopDatePicker
              label="Birthday"
              inputFormat="yyyy/MM/dd"
              value={birthDay}
              onChange={setBirthDay}
              renderInput={params => <TextField {...params} />}
            />
            <Button variant="contained">Add</Button>
          </Stack>
        </Box>
      </Modal>
    </LocalizationProvider>
  );
};

export default AddEmployeeModal;
