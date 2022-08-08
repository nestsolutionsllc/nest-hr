import { useState, FC, Dispatch, SetStateAction } from "react";
import { FormControl, MenuItem, Select, Typography, Box } from "@mui/material";
import Image from "next/image";
import { ticketType, users, usersImgUrl } from "./type";

const styles = {
  img: { borderRadius: 40 },
  submitContainer: { cursor: "pointer", display: "flex" },
  assignee: { ml: 1 },
};

type props = {
  value: string;
  currRow: ticketType;
  user: string;
  setUser: Dispatch<SetStateAction<string>>;
};

const Assignee: FC<props> = ({ currRow, value, user, setUser }) => {
  const [show, setShow] = useState<boolean>(false);
  const [selected, setSelected] = useState(value);
  const [selectedImg, setSelectedImg] = useState(usersImgUrl[value]);
  const change = async e => {
    if (e.target.value === selected) return;
    setSelected(e.target.value);
    const newAssignee = users.find(item => item.name === e.target.value);
    setSelectedImg(newAssignee.imgUrl);
    await (
      await fetch(`https://secure-taiga-55850.herokuapp.com/ticket/${currRow._id}`, {
        mode: "cors", // no-cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
          "Content-Type": "application/json",
        },
        method: "PATCH",
        body: JSON.stringify({
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
        }),
      })
    ).json();
    setUser(newAssignee.name);
  };
  return show ? (
    <FormControl fullWidth>
      <Select
        onMouseLeave={() => setShow(false)}
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={selected}
        label="Age"
        onChange={e => change(e)}
      >
        {users.map(item => {
          return (
            <MenuItem key={item.name} value={item.name}>
              <Image src={item.imgUrl} width={30} height={30} style={styles.img} />
              {item.name}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  ) : (
    <Box onClick={() => setShow(true)} sx={styles.submitContainer}>
      <Image width={30} height={30} src={selectedImg} style={styles.img} />
      <Typography sx={styles.assignee}>{selected}</Typography>
    </Box>
  );
};
export default Assignee;
