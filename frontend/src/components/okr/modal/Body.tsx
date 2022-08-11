import React, { FC, useState } from "react";
import {
  Box,
  FormControlLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import { MockType } from "./type";
import InputComp from "./InputComp";

const style = {
  text: {
    width: 135,
    color: "#607d8b",
  },
  center: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    display: "flex",
    justifyContent: "center",
    marginTop: "30px",
    marginRight: "55px",
  },
  margin: {
    marginTop: "20px",
    marginBottom: "20px",
  },
  titleText: {
    color: "#607d8b",
    width: "700px",
    backgroundColor: "rgba(0,0,0,.05)",
    marginLeft: "75px",
    padding: "5px",
  },
  bottomText: {
    color: "#7895a2",
    fontSize: "11px",
    margin: "30px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  height: {
    height: "47px",
    borderColor: "white",
  },
};
const Body: FC<{
  type: string;
  mockData: MockType;
}> = props => {
  const { type, mockData } = props;
  const [time, setTime] = useState({
    alignment: "Q1",
    year: 2022,
  });
  const handleChangeToggle = event => {
    setTime({ alignment: time.alignment, year: event.target.value });
    const newVal: MockType = mockData;
    newVal[type].year = event.target.value;
    newVal[type].Decimals = event.target.value;
  };
  const handleChange = (event: React.MouseEvent, newAlignment: string) => {
    setTime({ alignment: newAlignment, year: time.year });
    const newVal: MockType = mockData;
    newVal[type].season = newAlignment;
  };

  if (type === "points") {
    return (
      <Box>
        <InputComp
          inputType="auto"
          text="ResultType"
          placeHolder="Choose or Enter your own"
          space={false}
          percent={""}
          mockData={mockData}
          type={type}
        />
        <InputComp
          inputType="count"
          text="StartValue"
          placeHolder=""
          space={false}
          percent={""}
          mockData={mockData}
          type={type}
        />
        <InputComp
          inputType="count"
          text="EndValue"
          placeHolder=""
          space={false}
          percent={""}
          mockData={mockData}
          type={type}
        />
        <Box sx={style.input}>
          <Box sx={style.text}>Decimals</Box>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
            onChange={handleChangeToggle}
            value={mockData.points.Decimals}
          >
            <FormControlLabel value="0" control={<Radio size="small" />} label="0" />
            <FormControlLabel value="1" control={<Radio size="small" />} label="1" />
            <FormControlLabel value="2" control={<Radio size="small" />} label="2" />
          </RadioGroup>
        </Box>
      </Box>
    );
  }
  if (type === "quarter") {
    return (
      <Box sx={style.margin}>
        <Box sx={style.center}>
          <Select
            value={mockData.quarter.year}
            onChange={handleChangeToggle}
            displayEmpty
            inputProps={{ "aria-label": "Without label" }}
            sx={style.height}
          >
            <MenuItem value={2022}>2022</MenuItem>
            <MenuItem value={2023}>2023</MenuItem>
          </Select>
          <ToggleButtonGroup color="primary" value={mockData.quarter.season} exclusive onChange={handleChange}>
            <ToggleButton value="FULL YEAR">Full Year</ToggleButton>
            <ToggleButton value="Q1">Q1</ToggleButton>
            <ToggleButton value="Q2">Q2</ToggleButton>
            <ToggleButton value="Q3">Q3</ToggleButton>
            <ToggleButton value="Q4">Q4</ToggleButton>
          </ToggleButtonGroup>
        </Box>
        <Box sx={style.bottomText}>
          Q3 2022: 2022/07/01 - 2022/09/30. Changing objective period will unlink objective
        </Box>
      </Box>
    );
  }
  return (
    <Box>
      <Box sx={style.titleText}>
        Weight is used to increase or decrease importance of a single Key Result when calculating Objective completion%.
      </Box>
      <Box sx={style.margin}>
        {mockData.weight.map((el, ind) => {
          return (
            <Box>
              <InputComp
                text={el.ResultType}
                placeHolder=" "
                space
                percent={el.percent}
                inputType="count"
                type={type}
                mockData={mockData}
                key={ind}
              />
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default Body;
