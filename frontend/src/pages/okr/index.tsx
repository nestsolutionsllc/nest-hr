import React, { FC, useState } from "react";
import { Button, Box } from "@mui/material";
import ModalComp from "../../components/okr/modal/Modal";
import Body from "../../components/okr/modal/Body";
// import { MockType } from "../../components/okr/modal/type";
import AllUsersOkr from "../../components/okr/AllUsersOkr";

const MockData = [
  {
    userId: 1,
    username: "Marry",
    profileImg: "https://picsum.photos/200",
    lastUpdated: "2022-08-01",
    okrTitle: "Focus on hard skill",
    status: "🟡 In review ", // editing, approved, reviewed
  },
  {
    userId: 2,
    username: "Jane",
    profileImg: "https://picsum.photos/100",
    lastUpdated: "2022-08-03",
    okrTitle: "Increase AWS skill",
    status: "🔴 Editing ", // editing, approved, reviewed
  },
  {
    userId: 3,
    username: "Jumanji",
    profileImg: "https://picsum.photos/50",
    lastUpdated: "2022-08-03",
    okrTitle: "Communications",
    status: "🟢 Approved", // editing, approved, reviewed
  },
  {
    userId: 4,
    username: "Jumanji",
    profileImg: "https://picsum.photos/60",
    lastUpdated: "2022-08-03",
    okrTitle: "Learn how to display center",
    status: "🔵 Requested to review", // editing, approved, reviewed
  },
];
export type OkrListType = typeof MockData[0];

const Modal: FC = () => {
  const [type, setModalType] = useState<string>("");
  const [open, setOpen] = useState<boolean>(false);
  const [mockData, setMockData] = useState({
    points: { ResultType: "$", StartValue: 0, EndValue: 100, Decimals: 0 },
    quarter: { year: "2022", season: "full year" },
    weight: [
      { ResultType: "mongoDB", percent: "0" },
      { ResultType: "next", percent: "0" },
      { ResultType: "AWS", percent: "0" },
      { ResultType: "express", percent: "0" },
    ],
  });
  const Handle = (children: string) => {
    setOpen(true);
    setModalType(children);
  };

  return (
    <Box>
      {MockData.map((data, index) => (
        <AllUsersOkr {...data} key={index} />
      ))}
      <ModalComp mockData={mockData} type={type} setMockData={setMockData} setOpen={setOpen} open={open}>
        <Body mockData={mockData} type={type} />
      </ModalComp>
      <Button onClick={() => Handle("points")}>points</Button>
      <Button onClick={() => Handle("quarter")}>quarter</Button>
      <Button onClick={() => Handle("weight")}>weight</Button>
    </Box>
  );
};

export default Modal;
