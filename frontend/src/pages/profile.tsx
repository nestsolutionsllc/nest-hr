import { NextPage } from "next";
import { Box } from "@mui/material";
import VerticalTabs from "../components/profile/VerticalTabs";
import PersonalInfo from "../components/profile/PersonalInfo";

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
    <Box>
      {/* Personal information section */}

      <PersonalInfo />

      <Box sx={styles.profileContainer}>
        {/* Profile vertical tab menu sesction */}

        <VerticalTabs />
      </Box>
    </Box>
  );
};

export default ProfilePage;
