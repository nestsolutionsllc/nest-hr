import { Box, Button, Typography } from "@mui/material";
import { FC, useState } from "react";
import { CheckBoxList } from "./CheckBoxList";
import { CheckListType } from "../type";

const styles = {
  buttonsContainer: {
    width: "55%",
    display: "flex",
    marginTop: 4,
  },
  title: {
    borderBottom: 1,
    paddingBottom: 2,
    borderColor: "#f0f2f5",
    marginTop: 2,
  },
};

type CheckBoxFormProps = {
  checklists: Array<CheckListType>;
};

const CheckBoxForm: FC<CheckBoxFormProps> = ({ checklists }) => {
  const [realTimeCheckList, setRealTimeCheckList] = useState<CheckListType[]>(checklists);

  const resetCheckList = () => {
    setRealTimeCheckList(checklists);
  };

  return (
    <Box>
      <Typography variant="h4" sx={styles.title}>
        Onboard Checklist
      </Typography>
      {realTimeCheckList.map((checklist, index) => {
        return (
          <CheckBoxList key={index} mainData={realTimeCheckList} setMainData={setRealTimeCheckList} index={index} />
        );
      })}
      <Box sx={styles.buttonsContainer}>
        <Button variant="outlined" onClick={() => resetCheckList()}>
          Restart
        </Button>
        <Button variant="contained" onClick={() => console.log(realTimeCheckList)} sx={{ marginLeft: 1 }}>
          Save
        </Button>
      </Box>
    </Box>
  );
};

export default CheckBoxForm;
