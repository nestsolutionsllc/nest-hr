import React, { FC, useState } from "react";
import { Button, Box } from "@mui/material";
import ModalComp from "../../components/okr/modal/Modal";
import Body from "../../components/okr/modal/Body";
import { MockType } from "../../components/okr/modal/type";

const Modal: FC = () => {
  const [type, setModalType] = useState<string>("");
  const [open, setOpen] = useState<boolean>(false);
  const [mockData, setMockData] = useState<MockType>({
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
