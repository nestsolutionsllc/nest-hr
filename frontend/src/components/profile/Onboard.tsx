import { FC } from "react";
import { Typography, Box } from "@mui/material";
import CheckBoxForm from "./CheckBoxForm";
import ReadGuide from "./ReadGuide";

const styles = {
  title: {
    borderBottom: 1,
    paddingBottom: 2,
    borderColor: "#f0f2f5",
  },
  container: {
    width: "71vw",
    maxHeight: "85vh",
    overflow: "auto",
  },
};

const Onboard: FC = () => {
  return (
    <Box sx={styles.container}>
      <ReadGuide />
      <Typography variant="h4" sx={styles.title}>
        Onboard Checklist
      </Typography>
      <CheckBoxForm />
    </Box>
  );
};

export default Onboard;
