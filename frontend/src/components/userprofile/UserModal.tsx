import { useState, FC } from "react";
import { Typography, Button, Fade, Modal, Box, Backdrop, Input, Stack } from "@mui/material";
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
    // "&:hover": {
    //   backgroundColor: "#cfcfcf",
    // },
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
  },
  input: {
    opacity: 0.6,
    marginBottom: 2,
  },
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
            <Typography color={"navy"} margin={1} variant="h5">
              Edit User Info
            </Typography>
            <Box sx={styles.inputContainer}>
              <Box sx={styles.inputStyle}>
                <Input sx={styles.input} placeholder="Job Title"></Input>
              </Box>
              <Box sx={styles.inputStyle}>
                <Input sx={styles.input} placeholder="Company Name"></Input>
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

export default UserModal;
