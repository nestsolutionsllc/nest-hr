import { FC, Dispatch, SetStateAction, useState } from "react";
import {
  Typography,
  Box,
  Modal,
  TextField,
  Button,
  Stack,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  OutlinedInput,
  SelectChangeEvent,
} from "@mui/material";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

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

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const permissions = ["Users", "Salary"];

export const AddGroupModal: FC = ({ modal, setModal }: AddEmployeeModalType) => {
  const [selectedPermissions, setSelectedPermissions] = useState([]);

  const handleChange = (event: SelectChangeEvent<typeof selectedPermissions>) => {
    const {
      target: { value },
    } = event;
    setSelectedPermissions(typeof value === "string" ? value.split(",") : value);
  };

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
              Add Group
            </Typography>
            <TextField label="Name" />
            <FormControl sx={{ m: 1, width: "auto" }}>
              <InputLabel id="demo-multiple-name-label">Permissions</InputLabel>
              <Select
                labelId="demo-multiple-name-label"
                id="demo-multiple-name"
                multiple
                value={selectedPermissions}
                onChange={handleChange}
                input={<OutlinedInput label="Name" />}
                MenuProps={MenuProps}
              >
                {permissions.map(name => (
                  <MenuItem key={name} value={name}>
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <Button variant="contained">Add</Button>
          </Stack>
        </Box>
      </Modal>
    </LocalizationProvider>
  );
};

export default AddGroupModal;
