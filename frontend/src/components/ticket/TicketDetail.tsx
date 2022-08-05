import { MenuItem, Select, Typography, Box, CircularProgress } from "@mui/material";
import Image from "next/image";
import { Dispatch, FC, SetStateAction, useEffect, useState } from "react";
import Assignee from "./TicketAssignee";
import TicketModal from "./TicketListModal";
import TicketListStatus from "./TicketListStatus";
import { ticketType, TicketListModalType } from "./type";

type props = {
  curr: ticketType;
  setCurrent: Dispatch<SetStateAction<ticketType>>;
  loading?: string;
  setLoading: Dispatch<SetStateAction<string>>;
  user: string;
  setUser: Dispatch<SetStateAction<string>>;
};

const styles = {
  detailContainer: { border: "solid 1px #dfe1e6", borderRadius: 2, width: 400 },
  titleContainer: { borderBottom: "solid 1px #dfe1e6", p: 2 },
  bold: { fontWeight: "bold" },
  detailFieldValue: { width: 300, color: "#42526E", fontWeight: "bold" },
  detailFieldContainer: { display: "flex", mt: 3 },
  img: { borderRadius: 30 },
  fieldContainerWithImg: { width: "100%", display: "flex" },
  ml2: { ml: 2 },
  mt2: { mt: 2 },
  ml1: { ml: 1 },
  mr2: { mr: 2 },
  mb: { mb: 2 },
  mx1: { mx: 1 },
  mt3: { mt: 3 },
  mx2: { mx: 2 },
  mr1: { mr: 1 },
  p2: { p: 2 },
  flex: { display: "flex" },
  inputContainer: { width: "100%", display: "flex", alignItems: "center" },
};

const TicketDetail: FC<props> = ({ curr, setCurrent, setLoading, loading, user, setUser }) => {
  const [modal, setModal] = useState<TicketListModalType>(false);
  const [priority, setPriority] = useState<ticketType["priority"]>();
  useEffect(() => {
    setPriority(curr?.priority);
  }, [curr]);
  const change = async (setState, currValue, newValue, name) => {
    setLoading(name);
    setState(newValue);
    const newData = await (
      await fetch(`https://secure-taiga-55850.herokuapp.com/ticket/${curr._id}`, {
        mode: "cors", // no-cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
          "Content-Type": "application/json",
        },
        method: "PATCH",
        body: JSON.stringify({
          [name]: newValue,
          history: [
            {
              note: "",
              changedBy: { name: user },
              changed: name,
              changedFrom: currValue,
              changedTo: newValue,
            },
            ...curr.history,
          ],
        }),
      })
    ).json();
    setCurrent(newData);
    setLoading("");
  };
  return (
    curr && (
      <Box sx={styles.detailContainer}>
        <Box sx={styles.titleContainer}>
          <Typography sx={styles.bold}>Details</Typography>
        </Box>
        <Box sx={{ p: 2 }}>
          <Box sx={styles.flex}>
            <Typography sx={styles.detailFieldValue}>Assignee</Typography>
            <Box sx={styles.fieldContainerWithImg}>
              <Assignee currRow={curr} value={curr.assignee_id} user={user} setUser={setUser} />
            </Box>
          </Box>
          <Box sx={styles.detailFieldContainer}>
            <Typography sx={styles.detailFieldValue}>Reporter</Typography>
            <Box sx={styles.fieldContainerWithImg}>
              <Image
                src={
                  curr?.history[0]?.changedBy.imgUrl
                    ? curr?.history[0]?.changedBy.imgUrl
                    : "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80"
                }
                width={30}
                height={30}
                style={styles.img}
              />
              <Typography sx={{ ml: 1 }}>{curr?.reporter_id}</Typography>
            </Box>
          </Box>
          <Box sx={styles.detailFieldContainer}>
            <Typography sx={styles.detailFieldValue}>Priority</Typography>
            {priority && (
              <Box sx={styles.inputContainer}>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={priority}
                  label="Age"
                  onChange={e => change(setPriority, priority, e.target.value, "priority")}
                >
                  <MenuItem value={"low"}>Low</MenuItem>
                  <MenuItem value={"medium"}>Medium</MenuItem>
                  <MenuItem value={"high"}>High</MenuItem>
                </Select>
                {loading === "priority" && <CircularProgress size={20} sx={{ ml: 3 }} />}
              </Box>
            )}
          </Box>
          <Box sx={styles.detailFieldContainer}>
            <Typography sx={styles.detailFieldValue}>Status</Typography>
            <Box sx={styles.inputContainer}>
              <TicketListStatus ticket={curr} currValue={curr.status} setModal={setModal} />
            </Box>
          </Box>
          <TicketModal
            user={user}
            modal={modal}
            setModal={setModal}
            selectedRow={curr}
            updateList={true}
            setSelectedRow={setCurrent}
          />
        </Box>
      </Box>
    )
  );
};
export default TicketDetail;
