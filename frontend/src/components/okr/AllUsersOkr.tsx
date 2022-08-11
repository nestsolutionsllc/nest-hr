import React from "react";
import { Box, Typography, Avatar } from "@mui/material";
import Link from "next/link";
import MockData from "./mockData.json";

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

const AllUsersOkr: React.FC<typeof MockData[0]> = props => {
  return (
    <Link href="./okr/MainScreen">
      <Box sx={styles.listContainer}>
        <Box sx={styles.leftContainer}>
          <Avatar sx={{ width: "48px", height: "48px" }} src={props.profileImg}></Avatar>
          <Box ml="20px">
            <Typography sx={styles.title}>{props.username}</Typography>
            <Typography color={"#b2b2b2"}>Status: {props.status}</Typography>
            <Typography color={"#b2b2b2"}>Last updated: {props.lastUpdated}</Typography>
          </Box>
        </Box>
      </Box>
    </Link>
  );
};

export default AllUsersOkr;
