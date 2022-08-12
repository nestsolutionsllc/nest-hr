import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import FormController from "./FormController";
import { Input, Form } from "./Form";

const styles = {
  line: { width: "100%", height: "0.1em", backgroundColor: "#DFE1E6" },
  customScroll: {
    overflowX: "hidden",
    "&::-webkit-scrollbar, & *::-webkit-scrollbar": {
      width: 8,
    },
    "&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb": {
      borderRadius: 8,
      backgroundColor: "#61bff2",
    },
  },
  modal: {
    display: "flex",
    flexDirection: "column",
    minWidth: "40em",
  },
  fieldGap: {
    margin: "0.5em",
  },
};

type dataType = {
  orderData: Input[];
  leaveData: Input[];
  officeData: Input[];
};
const type: string[] = ["other", "office", "leave"];
const URL = process.env.TICKET_SYSTEM_ENDPOINT_URL;

const data: dataType = {
  orderData: [
    {
      tag: "textfield",
      label: "summary",
    },
    {
      tag: "textfield",
      label: "description",
      minRows: 2,
      multiline: true,
    },
    {
      tag: "textfield",
      label: "assignee",
    },
    {
      tag: "null",
      data: {
        status: ["open", "closed", "resolved", "rejected"],
        priority: ["low", "medium", "high"],
      },
    },
  ],
  leaveData: [
    { tag: "textfield", label: "Name" },
    {
      tag: "null",
      data: {
        reason: ["medical issue", "shit happened day", "domestic chore", "remote work", "family emergency", "other"],
        time: ["day", "hour"],
      },
    },
    {
      tag: "textfield",
      label: "Explanation",
    },
  ],
  officeData: [
    { tag: "typography", label: "Танд юу хэрэгтэй болсон вэ ?" },
    { tag: "textfield", multiline: true, label: "office" },
  ],
};

const RequestBtn: React.FC<{ user: string }> = ({ user }) => {
  const [open, setOpen] = React.useState(false);
  const [currentType, setCurrentType] = React.useState(type[0]);
  let newTicket = {
    reporter_id: "jigmee",
    assignee: "bataa",
  };

  const handleClickOpen = () => setOpen(true);

  const handleFormValuesChange = (key: string, value: string) => {
    const obj: object = {};
    obj[key] = value;
    newTicket = { ...newTicket, ...obj };
  };
  const getCurrentType = (Type: string) => setCurrentType(Type);
  const handleClose = async (event: React.SyntheticEvent<unknown>, reason?: string) => {
    if (reason !== "backdropClick") {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...newTicket, reporter_id: user, assignee_id: newTicket.assignee }),
      };
      try {
        await fetch(`${URL}/ticket`, requestOptions);
      } catch (error) {
        throw new Error(error);
      }
      setCurrentType(type[0]);
      setOpen(false);
    }
  };
  return (
    <Box>
      <Button onClick={handleClickOpen} variant="contained">
        Create
      </Button>
      <Dialog disableEscapeKeyDown open={open} onClose={handleClose} maxWidth="md">
        <DialogTitle>Create issue</DialogTitle>
        <Box sx={styles.line} />
        <DialogContent sx={styles.customScroll}>
          <Box component="form" sx={styles.modal}>
            <FormController
              title={"Type"}
              getType={getCurrentType}
              handleFormValuesChange={handleFormValuesChange}
              selectList={type}
            />
            {currentType === type[0] && <Form inputs={data.orderData} callback={handleFormValuesChange} />}
            {currentType === type[1] && <Form inputs={data.officeData} callback={handleFormValuesChange} />}
            {currentType === type[2] && <Form inputs={data.leaveData} callback={handleFormValuesChange} />}
          </Box>
        </DialogContent>
        <Box sx={styles.line} />
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Ok</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default RequestBtn;
