import { FC, SyntheticEvent, useEffect, useState } from "react";
// Material UI Components
import { AccordionDetails, Box } from "@mui/material";
// Import Material Icons
import ModalComp from "../modal/Modal";
import Body from "../modal/Body";
import { Accordion, AccordionSummary } from "./styledComponents";
import { MockType } from "../modal/type";
import PopeverDown from "./Popever";
import Summary from "./Summary";
import { StateType, PropsType } from "./Type";
import Details from "./Details";

const style = {
  container: {
    width: "100%",
    marginTop: "30px",
  },
  shadow: {
    boxShadow: "0 5px 6px -2px #929294",
    backgroundColor: "#fff",
  },
};

const OkrAccordion: FC<PropsType> = props => {
  const { title, okrData, setOkrData, ind } = props;
  const [collection, setCollection] = useState<StateType>({
    expanded: "panel1",
    addResult: false,
    anchorEl: null,
    newTitle: "",
    anchorElement: "",
    percent: 0,
    value: "",
    index: 0,
    type: "",
    newResult: "",
  });
  const [edit, setEdit] = useState({
    result: false,
    goals: false,
  });
  const [type, setModalType] = useState<string>("");
  const [open, setOpen] = useState<boolean>(false);
  const [mockData, setMockData] = useState<MockType>({
    points: { ResultType: "$", StartValue: 0, EndValue: 100, Decimals: 0 },
    quarter: { year: "2022", season: "full year" },
    weight: [
      { ResultType: "nest.js", percent: "0" },
      { ResultType: "MUI", percent: "0" },
    ],
  });
  const openPop = [Boolean(collection.anchorEl), Boolean(collection.anchorElement)];

  useEffect(() => {
    setCollection({ ...collection, newTitle: title });
  }, [okrData]);

  const handleChange = (panel: string) => (_event: SyntheticEvent, newExpanded: boolean) => {
    setCollection({ ...collection, expanded: newExpanded ? panel : "false" });
  };
  const handleClose = () => {
    setCollection({ ...collection, anchorEl: null, anchorElement: null });
  };

  return (
    <Box sx={style.container}>
      <Accordion expanded={collection.expanded === "okrPanel1"} onChange={handleChange("okrPanel1")}>
        <AccordionSummary aria-controls="panel1d-content" id="okrPanel1" sx={style.shadow}>
          <Summary
            collection={collection}
            edit={edit}
            setCollection={setCollection}
            setEdit={setEdit}
            okrData={okrData}
            ind={ind}
            setOkrData={setOkrData}
          />
        </AccordionSummary>
        <AccordionDetails>
          <Details
            collection={collection}
            okrData={okrData}
            ind={ind}
            setCollection={setCollection}
            setOkrData={setOkrData}
            setEdit={setEdit}
            edit={edit}
          />
        </AccordionDetails>
        {openPop.map(el => {
          return (
            <PopeverDown
              setOpen={setOpen}
              setModalType={setModalType}
              setEdit={setEdit}
              setOkrData={setOkrData}
              setCollection={setCollection}
              collection={collection}
              okrData={okrData}
              openPop={el}
              handleClose={handleClose}
              okrIndex={ind}
            />
          );
        })}
        <ModalComp mockData={mockData} type={type} setMockData={setMockData} setOpen={setOpen} open={open}>
          <Body mockData={mockData} type={type} />
        </ModalComp>
      </Accordion>
    </Box>
  );
};

export default OkrAccordion;
