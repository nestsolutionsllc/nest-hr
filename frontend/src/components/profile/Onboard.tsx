import { FC } from "react";
import { Typography, Stack } from "@mui/material";

const styles = {
  title: {
    borderBottom: 1,
    paddingBottom: 2,
    borderColor: "#f0f2f5",
  },
};

const Onboard: FC = () => {
  return (
    <Stack>
      <Typography variant="h4" sx={styles.title}>
        Onboard Checklist
      </Typography>
      <Typography variant="body1">Onboarding section</Typography>
    </Stack>
  );
};

export default Onboard;
