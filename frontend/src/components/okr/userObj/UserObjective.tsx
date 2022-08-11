import React, { FC } from "react";
import { Box, Typography } from "@mui/material";
import { UserObjectiveType } from "./type";

const styles = {
  container: {
    backgroundColor: "#fff",
    padding: "50px 30px 50px 30px",
    borderRadius: "10px",
    width: "50%",
  },
  box: {
    display: "flex",
    marginBottom: "40px",
  },
  contents: {
    display: "flex",
    flexDirection: "row",
  },
  numbers: {
    fontSize: 30,
  },
  textcontainer: {
    width: 150,
    borderRight: "2px solid #808080",
    marginLeft: 9,
    "&:last-child": {
      border: "none",
    },
    "&:first-child": {
      marginLeft: 0,
    },
  },
  values: {
    color: "#808080",
    fontSize: 15,
  },
  title: {
    fontWeight: 700,
    fontSize: 25,
  },
};
const UserObjective: FC<{ infos: UserObjectiveType }> = props => {
  const { infos } = props;
  return (
    <Box sx={styles.container}>
      <Box sx={styles.box}>
        <Typography sx={styles.title}>Your objectives</Typography>
      </Box>
      <Box sx={styles.contents}>
        <Box sx={styles.textcontainer}>
          <Typography sx={styles.numbers}>{infos.activeGoals}</Typography>
          <Typography sx={styles.values}>Active goals</Typography>
        </Box>
        <Box sx={styles.textcontainer}>
          <Typography sx={styles.numbers}>{infos.progress}%</Typography>
          <Typography sx={styles.values}>Progress</Typography>
        </Box>
        <Box sx={styles.textcontainer}>
          <Typography sx={styles.numbers}>{infos.completed}</Typography>
          <Typography sx={styles.values}>Completed</Typography>
        </Box>
        <Box sx={styles.textcontainer}>
          <Typography sx={styles.numbers}>{infos.dueDate}</Typography>
          <Typography sx={styles.values}>Due in 30 days</Typography>
        </Box>
      </Box>
    </Box>
  );
};
export default UserObjective;
