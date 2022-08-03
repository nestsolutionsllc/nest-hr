import { useState, FC } from "react";
import { Typography, Button, Fade, Modal, Box, Backdrop, Input } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

export const UserModal: FC = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
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
  };

  const style2 = {
    display: "flex",
    p: 1,
    flexDirection: "column",
    justifyContent: "space-around",
  };

  const inputStyle = {
    display: "flex",
    marginTop: 3,
    flexDirection: "column",
    justifyContent: "space-around",
  };

  const cancelButton = {
    width: 100,
    height: 40,
    borderRadius: 5,
    backgroundColor: "#e8e8e8",
    marginTop: 3,
    marginRight: 2,
    "&:hover": {
      backgroundColor: "#D1D1D1",
    },
  };

  const confirmButton = {
    width: 100,
    height: 40,
    borderRadius: 5,
    backgroundColor: "#63B6E5",
    marginTop: 3,
    "&:hover": {
      backgroundColor: "#2F86D9",
    },
  };

  const buttons = {
    display: "flex",
    justifyContent: "flex-end",
  };

  const edit = {
    height: 25,
    width: 25,
    // "&:hover": {
    //   backgroundColor: "#cfcfcf",
    // },
  };

  const icon = {
    width: 25,
    color: "black",
  };

  return (
    <div>
      <Button sx={edit} onClick={handleOpen}>
        <EditIcon sx={icon} />
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
          <Box sx={style}>
            <Typography color={"navy"} margin={1} variant="h5">
              Edit User Info
            </Typography>
            <Box sx={style2}>
              <Box sx={inputStyle}>
                <Input sx={{ opacity: 0.6, marginBottom: 2 }} placeholder="Job Title"></Input>
              </Box>
              <Box sx={inputStyle}>
                <Input sx={{ opacity: 0.6, marginBottom: 2 }} placeholder="Company Name"></Input>
              </Box>
              <Box sx={inputStyle}>
                <Input sx={{ opacity: 0.6, marginBottom: 2 }} placeholder="Location"></Input>
              </Box>
              <Box sx={inputStyle}>
                <Input sx={{ opacity: 0.6, marginBottom: 2 }} placeholder="Job Title"></Input>
              </Box>
            </Box>
            <Box sx={buttons}>
              <Button onClick={handleClose} sx={cancelButton}>
                <Typography fontSize={14} color={"#444444"}>
                  Cancel
                </Typography>
              </Button>
              <Button sx={confirmButton}>
                <Typography fontSize={14} color={"White"}>
                  Save
                </Typography>
              </Button>
            </Box>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default UserModal;
