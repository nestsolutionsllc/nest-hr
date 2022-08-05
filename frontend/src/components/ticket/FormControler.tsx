import * as React from "react";
import { FormControl, InputLabel, MenuItem, Typography } from "@mui/material";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import OutlinedInput from "@mui/material/OutlinedInput";

type CallbackFunction = (key: string, value: string) => void; // eslint-disable-line no-unused-vars

type Props = {
  title: string;
  selectList: string[];
  handleFormValuesChange: CallbackFunction | null;
  setState: React.Dispatch<React.SetStateAction<string>> | null;
};
const styles = {
  inputLabel: {
    display: "flex",
    fontSize: "1em",
    fontStyle: "inherit",
    lineHeight: "1.33333",
    color: "#6B778C",
    fontWeight: "600",
  },
  redStar: { color: "red", marginLeft: "3px" },
};

const FormControler = ({ title, selectList, handleFormValuesChange, setState }: Props) => {
  const [$value, set$value] = React.useState<number>(10);
  const handleChange = (event: SelectChangeEvent<typeof $value>) => {
    const typeNum = Number(event.target.value);
    const type = selectList[typeNum / 10 - 1];
    setState !== null ? setState(type) : null;
    handleFormValuesChange !== null ? handleFormValuesChange(title, type) : null;
    set$value(Number(typeNum));
  };

  return (
    <FormControl sx={{ m: 1, maxWidth: 350 }}>
      <InputLabel id="dialog-select-label" sx={styles.inputLabel}>
        {title}
        <Typography sx={styles.redStar}>*</Typography>
      </InputLabel>
      <Select
        labelId="dialog-select-label"
        id="dialog-select"
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
