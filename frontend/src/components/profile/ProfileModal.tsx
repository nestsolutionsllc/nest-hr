import { FC, Dispatch, SetStateAction } from "react";
import { Typography, Button, Modal, Box, Backdrop, Input, Stack } from "@mui/material";

interface ModalProps {
  showModal: boolean;
  setShowModal: Dispatch<SetStateAction<boolean>>;
  genre: string;
}

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
  },
  input: {
    opacity: 0.6,
    marginBottom: 2,
  },
};

export const CertificateModal = () => {
  return (
    <Stack>
      <Typography fontWeight={"bold"} color={"black"} margin={1} variant="h5">
        Edit certificate Info
      </Typography>
      <Box sx={styles.inputContainer}>
        <Box sx={styles.inputStyle}>
          <Input sx={styles.input} placeholder="Certificate Name" />
        </Box>
        <Box sx={styles.inputStyle}>
          <Input sx={styles.input} placeholder="Company Name" />
        </Box>
        <Box sx={styles.inputStyle}>
          <Input sx={styles.input} placeholder="Date Range" />
        </Box>
      </Box>
    </Stack>
  );
};

export const LanguageModal = () => {
  return (
    <Stack>
      <Typography fontWeight={"bold"} color={"black"} margin={1} variant="h5">
        Edit language Info
      </Typography>
      <Box sx={styles.inputContainer}>
        <Box sx={styles.inputStyle}>
          <Input sx={styles.input} placeholder="Language" />
        </Box>
        <Box sx={styles.inputStyle}>
          <Input sx={styles.input} placeholder="Level" />
        </Box>
      </Box>
    </Stack>
  );
};

export const AwardModal = () => {
  return (
    <Stack>
      <Typography fontWeight={"bold"} color={"black"} margin={1} variant="h5">
        Edit award Info
      </Typography>
      <Box sx={styles.inputContainer}>
        <Box sx={styles.inputStyle}>
          <Input sx={styles.input} placeholder="Year" />
        </Box>
        <Box sx={styles.inputStyle}>
          <Input sx={styles.input} placeholder="Title" />
        </Box>
        <Box sx={styles.inputStyle}>
          <Input sx={styles.input} placeholder="Description" />
        </Box>
      </Box>
    </Stack>
  );
};

export const PersonalInfoModal = () => {
  return (
    <Stack>
      <Typography fontWeight={"bold"} color={"black"} margin={1} variant="h5">
        Edit personal Info
      </Typography>
      <Box sx={styles.inputContainer}>
        <Box sx={styles.inputStyle}>
          <Input sx={styles.input} placeholder="Name" />
        </Box>
        <Box sx={styles.inputStyle}>
          <Input sx={styles.input} placeholder="Department" />
        </Box>
        <Box sx={styles.inputStyle}>
          <Input sx={styles.input} placeholder="Email" />
        </Box>
        <Box sx={styles.inputStyle}>
          <Input sx={styles.input} placeholder="Joining Date" />
        </Box>
      </Box>
    </Stack>
  );
};

const ProfileModal: FC<ModalProps> = ({ showModal, setShowModal, genre }) => {
  const handleClose = () => setShowModal(false);

  return (
    <Modal
      open={showModal}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Box sx={styles.container}>
        {genre === "certificates" && <CertificateModal />}
        {genre === "languages" && <LanguageModal />}
        {genre === "awards" && <AwardModal />}
        {genre === "info" && <PersonalInfoModal />}
        {/* Button */}
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
    </Modal>
  );
};

export default ProfileModal;
