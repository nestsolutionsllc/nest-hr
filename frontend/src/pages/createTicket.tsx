import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { TextField } from "@mui/material";
import FormControler from "../components/ticket/FormControler";

type dataType = {
  type: string[];
  status: string[];
  priority: string[];
};

const DATA: dataType = {
  type: ["salary", "leave", "facility", "other"],
  status: ["open", "closed", "resolved", "rejected"],
  priority: ["low", "medium", "high"],
};

export default function DialogSelect() {
  const [open, setOpen] = React.useState(false);

  let newTicket = {
    type: DATA.type[0],
    status: DATA.status[0],
    priority: DATA.priority[0],
    reporter_id: "003",
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
        <Box sx={{ width: "100%", height: "1px", backgroundColor: "#DFE1E6" }} />
        <DialogContent sx={{ overflowX: "hidden" }}>
          <Box
            component="form"
            sx={{
              display: "flex",
              flexDirection: "column",
              minWidth: "800px",
            }}
          >
            <FormControler title={"Type"} handleFormValuesChange={handleFormValuesChange} selectList={DATA.type} />
            <TextField
              onChange={e => handleFormValuesChange("summary", e.target.value)}
              sx={{ margin: "8px" }}
              label="summary"
            />
            <TextField
              sx={{ margin: "8px" }}
              multiline
              minRows={2}
              label="description"
              onChange={e => handleFormValuesChange("description", e.target.value)}
            />
            <TextField
              onChange={e => handleFormValuesChange("assignee_id", e.target.value)}
              sx={{ margin: "8px" }}
              label="assignee_id"
            />
            {Object.keys(DATA).map((el, i) => {
              if (el === "type") return null;
              return (
                <FormControler
                  key={i}
                  handleFormValuesChange={handleFormValuesChange}
                  title={el}
                  selectList={DATA[el]}
                />
              );
            })}
          </Box>
        </DialogContent>
        <Box sx={{ width: "100%", height: "1px", backgroundColor: "#DFE1E6" }} />
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Ok</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
