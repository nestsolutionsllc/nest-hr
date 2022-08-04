import { Typography, Stack, Grid } from "@mui/material";
<<<<<<< HEAD
import { Achievements } from "./AchievemenList";
=======
import { Skill, Certificate, Awards, Language } from "./AchievemenList";
>>>>>>> eee297e (refactor: rebased)

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
      <Grid container spacing={4}>
<<<<<<< HEAD
        <Achievements />
=======
        <Grid item md={5}>
          <Skill />
        </Grid>
        <Grid item md={6}>
          <Certificate />
        </Grid>
        <Grid item md={5}>
          <Awards />
        </Grid>
        <Grid item md={6}>
          <Language />
        </Grid>
>>>>>>> eee297e (refactor: rebased)
      </Grid>
    </Stack>
  );
};

export default Achievement;
