import { Typography, Stack, Box } from "@mui/material";
import { FC } from "react";
import Ladder from "../okr/ladder/Ladder";

const styles = {
  title: {
    borderBottom: 1,
    paddingBottom: 2,
    borderColor: "#f0f2f5",
  },
};

const Level: FC = () => {
  return (
    <Stack>
      <Typography variant="h4" sx={styles.title}>
        Ladder level
      </Typography>
      <Box display={"flex"} justifyItems={"center"} width={"500px"}>
        <Ladder label={"Current"} />
      </Box>
      <Typography variant="body1">Ladder level section</Typography>
    </Stack>
  );
};

export default Level;
