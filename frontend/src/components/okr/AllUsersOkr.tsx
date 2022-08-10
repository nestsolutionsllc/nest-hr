import React from "react";
import { Box, Typography, Avatar } from "@mui/material";

const styles = {
  listContainer: {
    backgroundColor: "#fafafa",
    width: "400px",
    border: "1px solid #e1e1e1",
    borderRadius: 5,
    display: "flex",
    alignItems: "center",
    marginBottom: "10px",
    padding: "16px",
    justifyContent: "space-between",
    cursor: "pointer",
  },
  leftContainer: {
    display: "flex",
    alignItems: "center",
  },
  title: {
    fontWeight: 600,
  },
};

const mockData = {
  userId: 4,
  username: "Jumanji",
  profileImg: "https://picsum.photos/60",
  lastUpdated: "2022-08-03",
  okrTitle: "Learn how to display center",
  status: "🔵 Requested to review", // editing, approved, reviewed
};

const AllUsersOkr: React.FC<typeof mockData> = props => {
  return (
    <Box sx={styles.listContainer} onClick={() => console.log(props.userId)}>
      <Box sx={styles.leftContainer}>
        <Avatar sx={{ width: "48px", height: "48px" }} src={props.profileImg}></Avatar>
        <Box ml="20px">
          <Typography sx={styles.title}>{props.username}</Typography>
          <Typography color={"#b2b2b2"}>Status: {props.status}</Typography>
          <Typography color={"#b2b2b2"}>Last updated: {props.lastUpdated}</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default AllUsersOkr;
