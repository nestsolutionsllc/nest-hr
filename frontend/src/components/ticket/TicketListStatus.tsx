import { useState, FC, Dispatch, SetStateAction } from "react";
import { Box, FormControl, MenuItem, Select, SelectChangeEvent, Typography } from "@mui/material";
import { TicketListModalType, TicketType } from "./type";

type TicketListStatusProps = {
  currValue: string;
  ticket: TicketType;
  setModal: Dispatch<SetStateAction<TicketListModalType>>;
  setSelectedRow?: Dispatch<SetStateAction<TicketType>>;
  changeRow?: boolean;
};

const styles = {
  itemContainer: { display: "flex", alignItems: "center" },
};

const TicketListStatus: FC<TicketListStatusProps> = ({ ticket, currValue, setModal, setSelectedRow, changeRow }) => {
  const [value, setValue] = useState<string>(currValue[0]);
  const handleChange = (event: SelectChangeEvent) => {
    setValue(event.target.value);
    setModal(event.target.value as TicketListModalType);
    if (changeRow) setSelectedRow(ticket);
  };
  return (
    <FormControl
      sx={{
        "& .MuiSvgIcon-root": {
          color: "white",
        },
        width: 150,
        m: 0,
        p: 0,
      }}
    >
      <Select labelId="demo-simple-select-label" id="demo-simple-select" value={value} onChange={handleChange}>
        <MenuItem value={"open"}>
          <Box sx={styles.itemContainer}>
            <Box sx={{ backgroundColor: "royalblue", width: 10, height: 10, borderRadius: 10, mx: 1 }}></Box>
            <Typography>Open</Typography>
          </Box>
        </MenuItem>
        <MenuItem value={"resolved"}>
          <Box sx={styles.itemContainer}>
            <Box sx={{ backgroundColor: "green", width: 10, height: 10, borderRadius: 10, mx: 1 }}></Box>
            <Typography>Resolved</Typography>
          </Box>
        </MenuItem>
        <MenuItem value={"rejected"}>
          <Box sx={styles.itemContainer}>
            <Box sx={{ backgroundColor: "red", width: 10, height: 10, borderRadius: 10, mx: 1 }}></Box>
            <Typography>Rejected</Typography>
          </Box>
        </MenuItem>
        <MenuItem value={"closed"}>
          <Box sx={styles.itemContainer}>
            <Box sx={{ backgroundColor: "orange", width: 10, height: 10, borderRadius: 10, mx: 1 }}></Box>
            <Typography>Closed</Typography>
          </Box>
        </MenuItem>
      </Select>
    </FormControl>
  );
};

export default TicketListStatus;
