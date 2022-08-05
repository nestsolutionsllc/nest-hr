import { Typography, Stack } from "@mui/material";
import { LanguageCard } from "./LanguageCard";

const styles = {
  title: {
    borderBottom: 1,
    paddingBottom: 2,
    borderColor: "#f0f2f5",
  },
};

const Achievement = () => {
  return (
    <Stack>
      <Typography variant="h4" sx={styles.title}>
        Achievement
      </Typography>
      <Typography variant="body1">Achievement section</Typography>
      <LanguageCard />
    </Stack>
  );
};

export default Achievement;
