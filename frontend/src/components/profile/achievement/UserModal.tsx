import { useState, FC } from "react";
import {
  Typography,
  Button,
  Fade,
  Modal,
  Box,
  Backdrop,
  Input,
  Stack,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

const styles = {
  container: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 500,
    bgcolor: "background.paper",
    border: "1px #000",
    borderRadius: 2,
    boxShadow: 24,
    p: 4,
  },
  icon: {
    width: 25,
    color: "black",
  },
  edit: {
    height: 25,
    width: 25,
  },
  buttons: {
    display: "flex",
    justifyContent: "flex-end",
  },
  confirmButton: {
    width: 100,
    height: 40,
    borderRadius: 5,
    backgroundColor: "#63B6E5",
    marginTop: 3,
    "&:hover": {
      backgroundColor: "#2F86D9",
    },
  },
  cancelButton: {
    width: 100,
    height: 40,
    borderRadius: 5,
    backgroundColor: "#e8e8e8",
    marginTop: 3,
    marginRight: 2,
    "&:hover": {
      backgroundColor: "#D1D1D1",
    },
  },
  inputStyle: {
    display: "flex",
    marginTop: 3,
    flexDirection: "column",
    justifyContent: "space-around",
  },
  inputContainer: {
    display: "flex",
    p: 1,
    flexDirection: "column",
    justifyContent: "space-around",
    marginTop: 3,
  },
  input: {
    opacity: 0.6,
    marginBottom: 2,
  },
  languageButton: {
    width: 25,
    height: 25,
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "flex-end",
  },
};

export const LanguageModal = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [language, setLanguage] = useState("");
  const [proficiency, setProficiency] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setLanguage(event.target.value);
  };
  const changeHandle = (event: SelectChangeEvent) => {
    setProficiency(event.target.value);
  };

  return (
    <Stack>
      <Button sx={styles.edit} onClick={handleOpen}>
        <EditIcon sx={styles.icon} />
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={styles.container}>
            <Typography fontWeight={"bold"} color={"black"} margin={1} variant="h5">
              Edit Languages
            </Typography>
            <Box sx={styles.inputContainer}>
              <FormControl sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="demo-simple-select-helper-label">Language</InputLabel>
                <Select
                  labelId="demo-simple-select-helper-label"
                  id="demo-simple-select-helper"
                  value={language}
                  label="Language"
                  onChange={handleChange}
                >
                  <MenuItem value={10}>English</MenuItem>
                  <MenuItem value={20}>German</MenuItem>
                  <MenuItem value={30}>Chinese</MenuItem>
                  <MenuItem value={40}>Korean</MenuItem>
                  <MenuItem value={50}>Mongolian</MenuItem>
                  <MenuItem value={60}>Spanish</MenuItem>
                </Select>
              </FormControl>
              <FormControl sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="demo-simple-select-helper">Proficiency</InputLabel>
                <Select
                  labelId="demo-simple-select-helper"
                  id="demo-simple-select"
                  value={proficiency}
                  label="Proficiency"
                  onChange={changeHandle}
                >
                  <MenuItem value={10}>Beginner</MenuItem>
                  <MenuItem value={20}>Intermediate</MenuItem>
                  <MenuItem value={30}>Advanced</MenuItem>
                  <MenuItem value={40}>Native Language</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Box sx={styles.buttons}>
              <Button onClick={handleClose} sx={styles.cancelButton}>
                <Typography fontSize={14} color={"#444444"}>
                  Cancel
                </Typography>
              </Button>
              <Button sx={styles.confirmButton}>
                <Typography fontSize={14} color={"White"}>
                  Save
                </Typography>
              </Button>
            </Box>
          </Box>
        </Fade>
      </Modal>
    </Stack>
  );
};

export const UserModal: FC = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Stack>
      <Button sx={styles.edit} onClick={handleOpen}>
        <EditIcon sx={styles.icon} />
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={styles.container}>
            <Typography fontWeight={"bold"} color={"black"} margin={1} variant="h5">
              Edit User Info
            </Typography>
            <Box sx={styles.inputContainer}>
              <Box sx={styles.inputStyle}>
                <Input sx={styles.input} placeholder="Job Title"></Input>
              </Box>
              <Box sx={styles.inputStyle}>
                <Input sx={styles.input} placeholder="Company languages"></Input>
              </Box>
              <Box sx={styles.inputStyle}>
                <Input sx={styles.input} placeholder="Location"></Input>
              </Box>
              <Box sx={styles.inputStyle}>
                <Input sx={styles.input} placeholder="Job Title"></Input>
              </Box>
            </Box>
            <Box sx={styles.buttons}>
              <Button onClick={handleClose} sx={styles.cancelButton}>
                <Typography fontSize={14} color={"#444444"}>
                  Cancel
                </Typography>
              </Button>
              <Button sx={styles.confirmButton}>
                <Typography fontSize={14} color={"White"}>
                  Save
                </Typography>
              </Button>
            </Box>
          </Box>
        </Fade>
      </Modal>
    </Stack>
  );
};
