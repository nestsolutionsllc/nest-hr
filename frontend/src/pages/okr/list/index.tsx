import { useState } from "react";
import type { NextPage } from "next";
import { Box, Button, TextField } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import OkrAccordion from "../../../components/okr/mainsSreen/Accordion";
import UserObjective from "../../../components/okr/userObj/UserObjective";
import OBJECTIVE_INFO_MOCK_DATA from "../../../components/okr/userObj/Mockdata";
import MockData from "../../../components/okr/mockData.json";
import { OkrDataType } from "../../../components/okr/mainsSreen/Type";
import LadderInformation from "../../../components/okr/ladder/LadderInformation";

const style = {
  container: {
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: "50px",
    justifyContent: "space-between",
    width: "90%",
  },
  row: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  marginLeft: {
    marginLeft: "20px",
  },
};

const OkrPage: NextPage = () => {
  const [okrData, setOkrData] = useState<OkrDataType[]>(MockData.okrData[0].okrList);
  const [adding, setAdding] = useState<boolean>(false);
  const [value, setValue] = useState<string>("");
  const addData = () => {
    if (value.trim() === "") return;
    setAdding(false);
    okrData.push({ title: value, krList: [] });
    setOkrData([...okrData]);
    setValue("");
  };
  return (
    <Box sx={[style.row, style.container]}>
      <Box sx={{ width: "50%", alignSelf: "flex-start" }}>
        <UserObjective infos={OBJECTIVE_INFO_MOCK_DATA} />
        <Box marginTop="20px">
          {adding ? (
            <Box sx={[style.row, { maxWidth: "400px", alignSelf: "flex-start" }]}>
              <TextField
                id="standard-basic"
                size="small"
                onChange={e => setValue(e.target.value)}
                onKeyPress={e => e.code === "Enter" && addData()}
                placeholder="Enter your okr goal"
                autoFocus
              />
              <Button
                sx={style.marginLeft}
                onClick={() => {
                  setValue("");
                  setAdding(false);
                }}
              >
                Cancel
              </Button>
            </Box>
          ) : (
            <Button
              variant="outlined"
              startIcon={<AddIcon />}
              onClick={() => {
                setAdding(true);
              }}
              size="medium"
            >
              New Goal
            </Button>
          )}
          <Box sx={{ display: "flex", flexDirection: "column", marginTop: "20px", width: "100%" }}>
            {okrData.map((el, ind) => {
              return <OkrAccordion title={el.title} ind={ind} okrData={okrData} setOkrData={setOkrData} key={ind} />;
            })}
          </Box>
        </Box>
      </Box>
      <Box sx={{ width: "40%", alignSelf: "flex-start" }}>
        <LadderInformation type={"level"} />
      </Box>
    </Box>
  );
};

export default OkrPage;
