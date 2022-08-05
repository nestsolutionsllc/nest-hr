import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { TextField, Typography } from "@mui/material";
import FormControler from "../components/ticket/FormControler";

type dataType = {
  orderDATA: {
    type: string[];
    status: string[];
    priority: string[];
  };
  leaveDATA: {
    reason: string[];
    time: string[];
  };
};

const DATA: dataType = {
  orderDATA: {
    type: ["other", "office", "leave"],
    status: ["open", "closed", "resolved", "rejected"],
    priority: ["low", "medium", "high"],
  },
  leaveDATA: {
    reason: ["medical issue", "shit happened day", "domestic chore", "remote work", "family emergency", "other"],
    time: ["day", "hour"],
  },
};

const styles = {
  line: { width: "100%", height: "1px", backgroundColor: "#DFE1E6" },
  scrollHide: { overflowX: "hidden" },
  modal: {
    display: "flex",
    flexDirection: "column",
    minWidth: "800px",
  },
  fieldGap: {
    margin: "8px",
  },
};

export default function DialogSelect() {
  const [open, setOpen] = React.useState(false);
  const [currType, setCurrType] = React.useState(DATA.orderDATA.type[0]);
  let newTicket = {
    type: DATA.orderDATA.type[0],
    status: DATA.orderDATA.status[0],
    priority: DATA.orderDATA.priority[0],
    reporter_id: "jigmee",
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleFormValuesChange = (key: string, value: string) => {
    const obj: object = {};
    obj[key] = value;
    newTicket = { ...newTicket, ...obj };
  };

  const handleClose = async (event: React.SyntheticEvent<unknown>, reason?: string) => {
    if (reason !== "backdropClick") {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newTicket),
      };
      try {
        await fetch("https://secure-taiga-55850.herokuapp.com/ticket", requestOptions);
      } catch (error) {
        throw new Error(error);
      }
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
        <DialogContent sx={styles.scrollHide}>
          <Box component="form" sx={styles.modal}>
            <FormControler
              title={"Type"}
              setState={setCurrType}
              handleFormValuesChange={handleFormValuesChange}
              selectList={DATA.orderDATA["type"]}
            />

            {currType === DATA.orderDATA.type[0] ? (
              <>
                <TextField
                  onChange={e => handleFormValuesChange("summary", e.target.value)}
                  sx={styles.fieldGap}
                  label="summary"
                />
                <TextField
                  sx={styles.fieldGap}
                  multiline
                  minRows={2}
                  label="description"
                  onChange={e => handleFormValuesChange("description", e.target.value)}
                />
                <TextField
                  onChange={e => handleFormValuesChange("assignee_id", e.target.value)}
                  sx={styles.fieldGap}
                  label="assignee"
                />
                {Object.keys(DATA.orderDATA).map((el, i) => {
                  if (el === "type") return null;
                  return (
                    <FormControler
                      key={i}
                      handleFormValuesChange={handleFormValuesChange}
                      title={el}
                      selectList={DATA.orderDATA[el]}
                      setState={null}
                    />
                  );
                })}
              </>
            ) : currType === DATA.orderDATA.type[1] ? (
              <>
                <Typography sx={styles.fieldGap}>Танд юу хэрэгтэй болсон вэ ?</Typography>
                <TextField multiline sx={styles.fieldGap} />
              </>
            ) : (
              <>
                <TextField sx={styles.fieldGap} label="Name" />
                {Object.keys(DATA.leaveDATA).map((el, i) => {
                  return (
                    <FormControler
                      key={i}
                      handleFormValuesChange={null}
                      title={el}
                      selectList={DATA.leaveDATA[el]}
                      setState={null}
                    />
                  );
                })}
                <TextField sx={styles.fieldGap} label="Explanation" />
              </>
            )}
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
}
