import { Box, Button, CircularProgress, Fade, Modal, TextareaAutosize, Typography } from "@mui/material";
import { CSSProperties, Dispatch, FC, SetStateAction, useState } from "react";
import { TicketListModalType, ticketType } from "./type";

interface props {
  modal: TicketListModalType;
  setModal: Dispatch<SetStateAction<TicketListModalType>>;
  selectedRow: ticketType;
  setSelectedRow?: Dispatch<SetStateAction<ticketType>>;
  updateList?: boolean;
  user: string;
}
const styles = {
  modalContentContainer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 810,
    bgcolor: "white",
    border: "1px solid var(--ds-border, #ccc)",
    p: 3,
  },
  formContainer: {
    width: "70%",
    mt: 2,
  },
  textArea: {
    width: "100%",
    height: 164,
    resize: "vertical",
    padding: 10,
    fontFamily: "ariel",
    fontSize: 17,
  } as CSSProperties,
  submitContainer: { justifyContent: "flex-end", width: "100%", display: "flex", mt: 3 },
  submitBtn: { backgroundColor: "royalblue", color: "white", mr: 3 },
  inputArea: { mt: 2 },
};

const TicketModal: FC<props> = ({ modal, setModal, selectedRow, setSelectedRow, updateList, user }) => {
  const [loading, setLoading] = useState(false);
  const [note, setNote] = useState<string>("");
  const change = async () => {
    setLoading(true);
    const newData = await (
      await fetch(`https://secure-taiga-55850.herokuapp.com/ticket/${selectedRow._id}`, {
        mode: "cors", // no-cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        method: "PATCH",
        body: JSON.stringify({
          status: modal,
          history: [
            {
              note,
              changedBy: { name: user },
              changed: "status",
              changedFrom: selectedRow.status[0],
              changedTo: modal,
            },
            ...selectedRow.history,
          ],
        }),
      })
    ).json();
    setLoading(false);
    if (updateList) setSelectedRow(newData);
    setModal(false);
  };
  return (
    <Modal
      open={!!modal}
      onClose={() => setModal(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Fade in={!!modal}>
        <Box sx={styles.modalContentContainer}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {modal}
          </Typography>
          <Box sx={styles.inputArea}>
            <Typography>Comment</Typography>
            <TextareaAutosize maxRows={3} onChange={e => setNote(e.target.value)} style={styles.textArea} />
          </Box>
          <Box sx={styles.submitContainer}>
            {loading ? (
              <CircularProgress color="success" size={20} />
            ) : (
              <Button onClick={() => change()} sx={styles.submitBtn} disabled={!!loading}>
                {modal}
              </Button>
            )}
            <Button onClick={() => setModal(false)}>Cancel</Button>
          </Box>
        </Box>
      </Fade>
    </Modal>
  );
};

export default TicketModal;
