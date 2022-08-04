import * as React from "react";
import { FormControl, InputLabel, MenuItem, Typography } from "@mui/material";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import OutlinedInput from "@mui/material/OutlinedInput";

type CallbackFunction = (key: string, value: string) => void; // eslint-disable-line no-unused-vars

type Props = {
  title: string;
  selectList: string[];
  handleFormValuesChange: CallbackFunction;
};

const FormControler = ({ title, selectList, handleFormValuesChange }: Props) => {
  const [$value, set$value] = React.useState<number>(10);

  const handleChange = (event: SelectChangeEvent<typeof $value>) => {
    set$value(Number(event.target.value));
    handleFormValuesChange(title, selectList[$value / 10 - 1]);
  };

  return (
    <FormControl sx={{ m: 1, maxWidth: 350 }}>
      <InputLabel
        id="dialog-select-label"
        sx={{
          display: "flex",
          fontSize: "1em",
          fontStyle: "inherit",
          lineHeight: "1.33333",
          color: "#6B778C",
          fontWeight: "600",
        }}
      >
        {title}
        <Typography sx={{ color: "red", marginLeft: "3px" }}>*</Typography>
      </InputLabel>
      <Select
        labelId="dialog-select-label"
        id="dialog-select"
        sx={{ width: "100%" }}
        value={$value}
        onChange={handleChange}
        fullWidth
        input={<OutlinedInput label={`${title} **`} />}
      >
        {selectList?.map((el, index) => {
          return (
            <MenuItem key={index} value={(index + 1) * 10} sx={$value / 10 - 1 === index ? { display: "none" } : null}>
              {el}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};

export default FormControler;
