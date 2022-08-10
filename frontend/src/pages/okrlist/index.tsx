import React, { FC } from "react";
import { Box } from "@mui/material";
import AllUsersOkr from "../../components/okr/AllUsersOkr";
import MockData from "../../components/okr/mockData.json";
import UserObjective from "../../components/okr/userObj/UserObjective";
import OBJECTIVE_INFO_MOCK_DATA from "../../components/okr/userObj/Mockdata";

export type OkrListType = typeof MockData[0];

const Modal: FC = () => {
  return (
    <Box>
      <UserObjective infos={OBJECTIVE_INFO_MOCK_DATA} />
      {MockData.map((data, index) => (
        <AllUsersOkr {...data} key={index} />
      ))}
    </Box>
  );
};

export default Modal;
