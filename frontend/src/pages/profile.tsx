import { NextPage } from "next";
import { Box } from "@mui/material";
import VerticalTabs from "../components/userprofile/VerticalTabs";

const styles = {
  profileContainer: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    flexDirection: "column",
  },
};

const ProfilePage: NextPage = () => {
  return (
    <Box sx={styles.profileContainer}>
      <VerticalTabs />
    </Box>
  );
};

export default ProfilePage;
