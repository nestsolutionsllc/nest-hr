import { Box, CircularProgress } from "@mui/material";
import { FC } from "react";

const styles = {
  container: {
    width: "100%",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
};

export const Loader: FC = () => {
  return (
    <Box sx={styles.container}>
      <CircularProgress />
    </Box>
  );
};

export default Loader;
