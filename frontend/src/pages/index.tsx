import type { NextPage } from "next";
import { Box } from "@mui/material";
import MainLayout from "../layouts/MainLayout";
import LadderInformation from "../components/Ladder/LadderInformation";

const styles = {
  container: {
    display: "flex",
    FlexDirection: "row",
    justifyContent: "space-between",
  },
};

const HomePage: NextPage = () => {
  return (
    <MainLayout>
      <Box sx={styles.container}>
        <LadderInformation type={"level"} />
        {/* <LadderInformation type={"description"} /> */}
      </Box>
    </MainLayout>
  );
};

export default HomePage;
