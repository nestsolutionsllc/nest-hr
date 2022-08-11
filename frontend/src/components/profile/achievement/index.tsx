import { Typography, Stack, Grid } from "@mui/material";
import { Achievements } from "./AchievemenList";

const styles = {
  title: {
    borderBottom: 1,
    paddingBottom: 2,
    borderColor: "#f0f2f5",
  },
};

const Achievement = ({ achievementData }) => {
  return (
    <Stack spacing={3}>
      <Typography variant="h4" sx={styles.title}>
        Achievements
      </Typography>
      <Grid container spacing={4}>
        <Achievements achievementData={achievementData} />
      </Grid>
    </Stack>
  );
};

export default Achievement;
