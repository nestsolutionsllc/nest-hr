import { FC, SyntheticEvent, useEffect, useState } from "react";
// Material UI Components
import { Box, Stack, Typography } from "@mui/material";
// Import Material Icons
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import ModalComp from "../modal/Modal";
import Body from "../modal/Body";
import { Accordion, AccordionDetails, AccordionSummary, NoBorder } from "./styledComponents";
import { MockType } from "../modal/type";
import PopeverDown from "./Popever";
import Summary from "./Summary";
import { ColType, PropsType } from "./Type";
import Results from "./Results";

const style = {
  container: {
    width: "48%",
    marginTop: 1,
  },
  column: {
    display: "flex",
    flexDirection: "column",
  },

  slider: {
    width: "60%",
  },
  word: {
    fontSize: "12px",
    color: "#b0bec5",
    display: "flex",
    margin: "4px 10px 0px 60px",
  },
  results: {
    display: "flex",
    alignItems: "center",
    margin: "16px 0px 0px 54px",
    cursor: "pointer",
  },
  edit: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
};

const OkrAccordion: FC<PropsType> = props => {
  const { title, data, setData, ind } = props;
  const [collection, setCollection] = useState<ColType>({
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
  const [type, setType] = useState<string>("");
  const [open, setOpen] = useState<boolean>(false);
  const [mockData, setMockData] = useState<MockType>({
    points: { ResultType: "$", StartValue: 0, EndValue: 100, Decimals: 0 },
    quarter: { year: "2022", season: "full year" },
    weight: [
      { ResultType: "nest.js", percent: "0" },
      { ResultType: "MUI", percent: "0" },
    ],
  });
  const openPop = Boolean(collection.anchorEl);
  const openPopel = Boolean(collection.anchorElement);
  useEffect(() => {
    setCollection({ ...collection, newTitle: title });
  }, [data]);

  const handleChange = (panel: string) => (_event: SyntheticEvent, newExpanded: boolean) => {
    setCollection({ ...collection, expanded: newExpanded ? panel : "false" });
  };
  const handleClose = () => {
    setCollection({ ...collection, anchorEl: null, anchorElement: null });
  };
  const add = () => {
    if (collection.value !== "") {
      data[ind].child.push(collection.value);
      setCollection({ ...collection, addResult: false, value: "" });
    }
    setData([...data]);
  };

  return (
    <Box sx={style.container}>
      <Accordion expanded={collection.expanded === "okrPanel1"} onChange={handleChange("okrPanel1")}>
        <AccordionSummary aria-controls="panel1d-content" id="okrPanel1" sx={{ boxShadow: "0 5px 6px -2px #929294" }}>
          <Summary
            collection={collection}
            edit={edit}
            setCollection={setCollection}
            setEdit={setEdit}
            data={data}
            ind={ind}
            setData={setData}
          />
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {data[ind].child.map((el, index: number) => {
              return (
                <Results
                  el={el}
                  index={index}
                  setCollection={setCollection}
                  edit={edit}
                  collection={collection}
                  key={index}
                  setEdit={setEdit}
                />
              );
            })}

            <Box sx={style.results}>
              {collection.addResult ? (
                <Box>
                  <AddOutlinedIcon onClick={add} />
                  <NoBorder
                    id="standard-basic"
                    sx={{ ml: 3 }}
                    size="small"
                    value={collection.value}
                    onChange={e => setCollection({ ...collection, value: e.target.value })}
                    onKeyPress={e => e.code === "Enter" && add()}
                    placeholder="Enter your objective"
                    autoFocus
                  />
                </Box>
              ) : (
                <Stack onClick={() => setCollection({ ...collection, addResult: true })} sx={style.edit}>
                  <Box color="#929294" ml={0.2}>
                    <AddCircleOutlineOutlinedIcon />
                  </Box>
                  <Box sx={{ ml: 1 }}>Add Key Result</Box>
                </Stack>
              )}
            </Box>
          </Typography>
        </AccordionDetails>
        <PopeverDown
          setOpen={setOpen}
          setType={setType}
          setEdit={setEdit}
          setData={setData}
          setCollection={setCollection}
          collection={collection}
          data={data}
          openPop={openPop}
          handleClose={handleClose}
          ind1={ind}
        />
        <PopeverDown
          setOpen={setOpen}
          setType={setType}
          setEdit={setEdit}
          setData={setData}
          setCollection={setCollection}
          collection={collection}
          data={data}
          openPop={openPopel}
          handleClose={handleClose}
          ind1={ind}
        />

        <ModalComp mockData={mockData} type={type} setMockData={setMockData} setOpen={setOpen} open={open}>
          <Body mockData={mockData} type={type} />
        </ModalComp>
      </Accordion>
    </Box>
  );
};

export default OkrAccordion;
