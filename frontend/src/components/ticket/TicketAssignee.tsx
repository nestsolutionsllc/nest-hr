import { useState, FC, Dispatch, SetStateAction } from "react";
import { FormControl, MenuItem, Select, Typography, Box } from "@mui/material";
import Image from "next/image";
import { TicketType, users, usersImgUrl } from "./type";
import fetchTicket from "./fetch-utility";

const styles = {
  img: { borderRadius: 40 },
  submitContainer: { cursor: "pointer", display: "flex" },
  assignee: { ml: 1 },
  userInfoContainer: { flexDirection: "row", display: "flex" },
  userInfoName: { ml: 1, mr: 3 },
};

type TicketAssigneeProps = {
  value: string;
  currRow: TicketType;
  user: string;
  setUser: Dispatch<SetStateAction<string>>;
};

const Assignee: FC<TicketAssigneeProps> = ({ currRow, value, user, setUser }) => {
  const [show, setShow] = useState<boolean>(false);
  const [selected, setSelected] = useState<string>(value);
  const [selectedImg, setSelectedImg] = useState<string>(usersImgUrl[value]);
  const changeTicketAssignee = async e => {
    if (e.target.value === selected) return;
    setSelected(e.target.value);
    const newAssignee = users.find(item => item.name === e.target.value);
    setSelectedImg(newAssignee.imgUrl);
    await fetchTicket(`${process.env.TICKET_SYSTEM_ENDPOINT_URL}/ticket/${currRow._id}`, "PATCH", {
      assignee_id: newAssignee.name,
      history: [
        {
          note: "",
          changedBy: { name: user },
          changed: "assignee_id",
          changedFrom: value,
          changedTo: newAssignee.name,
        },
        ...currRow.history,
      ],
    });
    setUser(newAssignee.name);
  };
  return (
    <>
      {show && (
        <FormControl>
          <Select
            onMouseLeave={() => setShow(false)}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={selected}
            label="Age"
            onChange={e => changeTicketAssignee(e)}
            sx={{ display: "flex", alignItems: "center" }}
          >
            {users.map(item => {
              return (
                <MenuItem key={item.name} value={item.name}>
                  <Box sx={styles.userInfoContainer}>
                    <Image src={item.imgUrl} width={30} height={30} style={styles.img} />
                    <Typography sx={styles.userInfoName}>{item.name}</Typography>
                  </Box>
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      )}
      {!show && (
        <Box onClick={() => setShow(true)} sx={styles.submitContainer}>
          <Image width={30} height={30} src={selectedImg} style={styles.img} />
          <Typography sx={styles.assignee}>{selected}</Typography>
        </Box>
      )}
    </>
  );
};
export default Assignee;
