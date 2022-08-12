import { NextPage, GetStaticProps } from "next";
import { Box } from "@mui/material";
import VerticalTabs from "../components/profile/VerticalTabs";
import PersonalInfo from "../components/profile/PersonalInfo";
import { IAchievementDataProps } from "../components/profile/type";
import fetchData from "../utils/fetchData";

const styles = {
  tabContainer: {
    marginRight: 2,
    marginBottom: 2,
  },
};

const ProfilePage: NextPage<IAchievementDataProps> = ({ achievementData }) => {
  return (
    <Box>
      {/* Personal information section */}
      <PersonalInfo />
      <Box sx={styles.tabContainer}>
        {/* Profile vertical tab menu sesction */}
        <VerticalTabs achievementData={achievementData} />
      </Box>
    </Box>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const achievementData = await fetchData({ path: "/achievements", method: "get" });
  return {
    props: {
      achievementData,
    },
    revalidate: 10,
  };
};

export default ProfilePage;
