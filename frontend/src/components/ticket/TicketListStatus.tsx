import { useState, FC, Dispatch, SetStateAction } from "react";
import { FormControl, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { TicketListModalType, ticketType } from "./type";

type props = {
  currValue: string;
  ticket: ticketType;
  setModal: Dispatch<SetStateAction<TicketListModalType>>;
  setSelectedRow?: Dispatch<SetStateAction<ticketType>>;
  changeRow?: boolean;
};

const TicketListStatus: FC<props> = ({ ticket, currValue, setModal, setSelectedRow, changeRow }) => {
  const [value, setValue] = useState<string>(currValue[0]);
  const handleChange = (event: SelectChangeEvent) => {
    setValue(event.target.value);
    setModal(event.target.value as TicketListModalType);
    if (changeRow) setSelectedRow(ticket);
  };
  return (
    <FormControl fullWidth>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={value}
        label="Age"
        onChange={handleChange}
      >
        <MenuItem value={"open"}>Open</MenuItem>
        <MenuItem value={"resolved"}>Resolved</MenuItem>
        <MenuItem value={"rejected"}>Rejected</MenuItem>
        <MenuItem value={"closed"}>Closed</MenuItem>
      </Select>
    </FormControl>
  );
};

export default TicketListStatus;
