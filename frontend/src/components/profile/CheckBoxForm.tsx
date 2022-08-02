import { Box, Button } from "@mui/material";
import { FC, useState } from "react";
import { CheckBoxList } from "./CheckBoxList";
import { MOCK_DATA } from "./mockData";
import { CheckListType } from "./types";

const styles = {
  buttonsContainer: {
    width: "55%",
    display: "flex",
    marginTop: 2,
  },
};

const CheckBoxForm: FC = () => {
  const [realTimeCheckList, setRealTimeCheckList] = useState<CheckListType[]>(MOCK_DATA.checklists);

  const resetCheckList = () => {
    setRealTimeCheckList(MOCK_DATA.checklists);
    console.log(MOCK_DATA.checklists);
  };

  return (
    <Box>
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
