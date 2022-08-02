import { NextPage } from "next";
import { Box, styled } from "@mui/material";
import VerticalTabs from "../components/userprofile/VerticalTabs";

const ProfileContainer = styled(Box)`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
`;

const ProfilePage: NextPage = () => {
  return (
    <ProfileContainer>
      <VerticalTabs />
    </ProfileContainer>
  );
};

export default ProfilePage;
