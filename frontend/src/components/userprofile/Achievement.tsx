import { Typography, Stack } from "@mui/material";

const styles = {
  title: {
    borderBottom: 1,
    paddingBottom: 2,
    borderColor: "#f0f2f5",
  },
};

export const Achievement = () => {
  return (
    <Stack>
      <Typography variant="h4" sx={styles.title}>
        Achievement
      </Typography>
      <Typography variant="body1">Achievemen section</Typography>
    </Stack>
  );
};

export default Achievement;
