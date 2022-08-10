import React, { FC } from "react";
import { Box } from "@mui/material";
import AllUsersOkr from "../../components/okr/AllUsersOkr";

const MockData = [
  {
    userId: 1,
    username: "Marry",
    profileImg: "https://picsum.photos/200",
    lastUpdated: "2022-08-01",
    okrTitle: "Focus on hard skill",
    status: "Requested to review 🔵",
  },
  {
    userId: 2,
    username: "Jane",
    profileImg: "https://picsum.photos/100",
    lastUpdated: "2022-08-03",
    okrTitle: "Increase AWS skill",
    status: "Requested to review 🔵",
  },
  {
    userId: 3,
    username: "Jumanji",
    profileImg: "https://picsum.photos/50",
    lastUpdated: "2022-08-03",
    okrTitle: "Communications",
    status: "Approved 🟢",
  },
  {
    userId: 4,
    username: "Jumanji",
    profileImg: "https://picsum.photos/60",
    lastUpdated: "2022-08-03",
    okrTitle: "Learn how to display center",
    status: "Requested to review 🔵",
  },
];
export type OkrListType = typeof MockData[0];

const Modal: FC = () => {
  return (
    <Box>
      {MockData.map((data, index) => (
        <AllUsersOkr {...data} key={index} />
      ))}
    </Box>
  );
};

export default Modal;
