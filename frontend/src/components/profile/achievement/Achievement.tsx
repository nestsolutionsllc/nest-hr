import { Typography, Stack, Grid } from "@mui/material";
import { Skill, Certificate, Awards } from "./AchievemenList";

const styles = {
  title: {
    borderBottom: 1,
    paddingBottom: 2,
    borderColor: "#f0f2f5",
  },
};

const Achievement = () => {
  return (
    <Stack spacing={3}>
      <Typography variant="h4" sx={styles.title}>
        Achievements
      </Typography>
      <Grid container spacing={2}>
        <Grid item md={5}>
          <Skill />
        </Grid>
        <Grid item md={7}>
          <Certificate />
        </Grid>
        <Grid item md={5}>
          <Awards />
        </Grid>
        <Grid item md={6}>
          <Awards />
        </Grid>
      </Grid>
    </Stack>
  );
};

export default Achievement;
