import React from "react";
import { Box, Button, Typography } from "@mui/material";

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    backgroundColor: "#fff",
    padding: "50px 30px 50px 30px",
    borderRadius: "10px",
    width: "50%",
  },
  box: {
    display: "flex",
    marginBottom: "40px",
  },
  title: {
    fontWeight: 700,
    fontSize: 25,
  },
  times: {
    margin: 1,
    background: "#fff",
    border: "1px solid #808080",
  },
};
const QueryTime = () => {
  return (
    <Box sx={styles.container}>
      <Box sx={styles.box}>
        <Typography sx={styles.title}>Period Objective</Typography>
      </Box>
      <Box>
        <Box>
          <Button sx={styles.times}>FULL YEAR</Button>
          <Button sx={styles.times}>Q1</Button>
          <Button sx={styles.times}>Q2</Button>
          <Button sx={styles.times}>Q3</Button>
          <Button sx={styles.times}>Q4</Button>
        </Box>
      </Box>
    </Box>
  );
};
export default QueryTime;
