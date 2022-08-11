import React, { FC } from "react";
import { Box } from "@mui/material";
import AllUsersOkr from "../../components/okr/AllUsersOkr";
import MockData from "../../components/okr/mockData.json";

export type OkrListType = typeof MockData.okrData[0];

const Modal: FC = () => {
  console.log(MockData);
  return (
    <Box>
      {MockData.okrData.map((data, index) => (
        <AllUsersOkr {...data} key={index} />
      ))}
    </Box>
  );
};

export default Modal;
