import * as React from "react";
import { FormControl, InputLabel, MenuItem, Typography } from "@mui/material";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import OutlinedInput from "@mui/material/OutlinedInput";

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
  width: { m: 1, maxWidth: "50%" },
  none: { display: "none" },
};

type callback = (key: string, value: string) => void; // eslint-disable-line no-unused-vars

type Props = {
  title: string;
  selectList: string[];
  handleFormValuesChange: callback;
  getType?: (type: string) => void; // eslint-disable-line no-unused-vars
};

const FormController = ({ title, selectList, handleFormValuesChange, getType }: Props) => {
  const [$value, set$value] = React.useState<number>(10);

  const handleChange = (event: SelectChangeEvent<typeof $value>) => {
    const nextType = selectList[Number(event.target.value) / 10 - 1];
    set$value(Number(event.target.value));
    getType(nextType);
  };

  handleFormValuesChange(title, selectList[$value / 10 - 1]);

  return (
    <FormControl sx={styles.width}>
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
            <MenuItem key={index} value={(index + 1) * 10} sx={($value / 10 - 1 === index && styles.none) || null}>
              {el}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};

export default FormController;
