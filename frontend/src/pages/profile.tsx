import { NextPage } from "next";
import { Box } from "@mui/material";
import VerticalTabs from "../components/profile/VerticalTabs";
import PersonalInfo from "../components/profile/PersonalInfo";

const styles = {
  tabContainer: {
    marginRight: 2,
    marginBottom: 2,
  },
};

const ProfilePage: NextPage = () => {
  return (
    <Box>
      {/* Personal information section */}

      <PersonalInfo />
      <Box sx={styles.tabContainer}>
        {/* Profile vertical tab menu sesction */}
        <VerticalTabs />
      </Box>
    </Box>
  );
};

export default ProfilePage;
