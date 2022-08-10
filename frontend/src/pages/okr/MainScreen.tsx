import { useState } from "react";
import type { NextPage } from "next";
import { Box, Button, TextField } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import OkrAccordion from "../../components/okr/mainsSreen/Accordion";
import UserObjective from "../../components/okr/userObj/UserObjective";
import OBJECTIVE_INFO_MOCK_DATA from "../../components/okr/userObj/Mockdata";
// import MockData from "../../components/okr/mockData.json";

const OkrPage: NextPage = () => {
  const [okrData, setOkrData] = useState([
    { name: "improve customerisfaction scores with 20%", child: ["nest.js", "MUI"] },
  ]);
  const [add, setAdd] = useState(false);
  const [value, setValue] = useState<string>("");
  const addData = () => {
    if (value !== "") {
      okrData.push({ name: value, child: [] });
      setAdd(false);
    }
    setOkrData([...okrData]);
    setValue("");
  };
  return (
    <Box>
      <UserObjective infos={OBJECTIVE_INFO_MOCK_DATA} />
      <Box marginTop="20px">
        {add ? (
          <Box>
            <TextField
              id="standard-basic"
              size="small"
              onChange={e => setValue(e.target.value)}
              onKeyPress={e => e.code === "Enter" && addData()}
              placeholder="Enter your okr goal"
              autoFocus
            />
          </Box>
        ) : (
          <Button
            variant="outlined"
            startIcon={<AddIcon />}
            onClick={() => {
              setAdd(true);
            }}
            size="medium"
          >
            New Goal
          </Button>
        )}
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
          {okrData.map((el, ind) => {
            return <OkrAccordion title={el.name} ind={ind} okrData={okrData} setOkrData={setOkrData} key={ind} />;
          })}
        </Box>
      </Box>
    </Box>
  );
};

export default OkrPage;
