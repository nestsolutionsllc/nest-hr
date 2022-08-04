import { FC } from "react";
import { Box, Stack, Grid } from "@mui/material";
import CheckBoxForm from "./CheckBoxForm";
import ReadGuide from "./ReadGuide";

const styles = {
  line: {
    width: "1px",
    height: "90%",
    marginLeft: 8,
    marginRight: 6,
    border: "1px solid #f0f2f5",
  },
};

const Onboard: FC = () => {
  return (
    <Stack>
      <Grid container>
        <Grid item md={5}>
          <ReadGuide />
        </Grid>
        <Grid item>
          <Box sx={styles.line}></Box>
        </Grid>
        <Grid item md={5}>
          <CheckBoxForm />
        </Grid>
      </Grid>
    </Stack>
  );
};

export default Onboard;
