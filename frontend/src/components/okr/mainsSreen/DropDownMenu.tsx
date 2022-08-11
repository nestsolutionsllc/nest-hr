import { Button, Box } from "@mui/material";
import React from "react";

const DropDownMenu = props => {
  const { Icon, title, collection, okrData, setOkrData, setCollection, setEdit, krIndex, okrIndex } = props;
  const change = () => {
    switch (title) {
      case "Delete to":
        setOkrData(okrData.filter((_el, index) => index !== okrIndex));
        break;
      case "Edit Result":
        setEdit({ result: true, goals: false, resultIndex: krIndex });
        break;
      case "Delete Result":
        {
          const deleteData = okrData.map((el, matchindex) => {
            if (matchindex === okrIndex) {
              const element = el;
              element.krList = el.krList.filter((_el1, index) => krIndex !== index);
              return element;
            }
            return el;
          });
          setOkrData([...deleteData]);
        }
        break;
      case "Edit":
        setEdit({ result: false, goals: true });
        break;
      default:
        break;
    }
    setCollection({ ...collection, anchorEl: null, anchorElement: null });
  };
  return (
    <Button
      sx={{ width: "100%", display: "flex", justifyContent: "flex-start", color: "#b0bec5", padding: "0.5em 1.2em" }}
      startIcon={Icon}
      onClick={change}
    >
      <Box sx={{ color: "#546e7a" }}>{title}</Box>
    </Button>
  );
};
export default DropDownMenu;
