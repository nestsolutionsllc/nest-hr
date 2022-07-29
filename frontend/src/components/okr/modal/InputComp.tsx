import React, { FC, useState } from "react";
import { Autocomplete, Box, TextField } from "@mui/material";
import { MockType, QuarterlyType, TestType } from "./type";

const style = {
  width: {
    width: 210,
    height: 43,
  },
  Row: {
    display: "flex",
    flexDirection: "row",
  },
  text: {
    width: 135,
    color: "#607d8b",
  },
  center: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
};
const typeData: TestType[] = [
  { label: "%", group: "percent" },
  { label: "$", group: "currency" },
  { label: "€", group: "currency" },
  { label: "£", group: "currency" },
  { label: "¥", group: "currency" },
  { label: "USD", group: "currency" },
  { label: "EUR", group: "currency" },
  { label: "GBP", group: "currency" },
  { label: "dollars", group: "currency" },
  { label: "euros", group: "currency" },
  { label: "pounds", group: "currency" },
  { label: "answers", group: "units" },
  { label: "articles", group: "units" },
  { label: "items", group: "units" },
  { label: "meeeting", group: "units" },
  { label: "people", group: "units" },
  { label: "visitors", group: "units" },
];
type Parameter = {
  inputType: string;
  text: string;
  placeHolder: string;
  space: boolean;
  percent: string;
  mockData: MockType;
  type: string;
};
const InputComp: FC<Parameter> = props => {
  const { inputType, text, placeHolder, space, percent, mockData, type } = props;
  const [valueText, setValueText] = useState("");

  const handleChange = (_event, value) => {
    const newVal = mockData;
    newVal[type][text] = value?.label;
  };
  const handleChangeCount = event => {
    const newVal = mockData;
    newVal[type][text] = event.target.value;
    setValueText(event.target.value);
  };
  const handleChangePercent = event => {
    const newVal = mockData;
    newVal[type].map((el: QuarterlyType, ind: number) => {
      if (el.ResultType === text) {
        newVal[type][ind].percent = event.target.value;
      }
      return "";
    });
  };
  return (
    <Box
      sx={(style.Row, style.center)}
      style={{
        marginTop: 20,
        justifyContent: space ? "space-around" : "",
      }}
    >
      <Box sx={style.text}>{text}</Box>
      <Box sx={style.Row}>
        {inputType === "auto" && (
          <Box>
            <Autocomplete
              options={typeData}
              id="combo-box-demo"
              sx={style.width}
              renderInput={params => <TextField {...params} />}
              groupBy={option => option?.group}
              onChange={handleChange}
              value={mockData.points.ResultType}
            />
            <Box style={{ color: "#7895a2", fontSize: "11px", marginBottom: "-10px", marginTop: "15px" }}>
              {placeHolder}
            </Box>
          </Box>
        )}
        {inputType === "count" && (
          <>
            <TextField
              id="outlined-basic"
              label={placeHolder}
              variant="outlined"
              style={style.width}
              type="number"
              onChange={event => (percent ? handleChangePercent(event) : handleChangeCount(event))}
            />
            {percent && (
              <Box sx={style.center} style={{ marginLeft: "40px", width: "20px", color: "#607d8b" }}>
                {valueText}%
              </Box>
            )}
          </>
        )}
      </Box>
    </Box>
  );
};
export default InputComp;
