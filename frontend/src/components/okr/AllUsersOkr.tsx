import React from "react";
import { Box, Typography, Avatar } from "@mui/material";

const styles = {
  listContainer: {
    backgroundColor: "#fafafa",
    width: "100%",
    border: "1px solid #e1e1e1",
    borderRadius: 5,
    display: "flex",
    alignItems: "center",
    marginBottom: "10px",
    padding: "20px 40px",
    justifyContent: "space-between",
    cursor: "pointer",
  },
  leftContainer: {
    display: "flex",
    alignItems: "center",
    flex: 3,
  },
  divider: {
    height: "52px",
    border: "1px solid #b2b2b2",
    margin: "0 30px",
  },
  title: {
    fontWeight: 600,
    fontSize: 20,
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
          <Typography color={"#b2b2b2"}>Name: {props.username}</Typography>
          <Typography sx={styles.title}>{props.okrTitle}</Typography>
        </Box>
      </Box>
      <Box display="flex" flex={1}>
        <Box sx={styles.divider} />
        <Box>
          <Typography color={"#b2b2b2"}>Status: {props.status}</Typography>
          <Typography color={"#b2b2b2"}>Last updated: ⏱️ {props.lastUpdated}</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default AllUsersOkr;
