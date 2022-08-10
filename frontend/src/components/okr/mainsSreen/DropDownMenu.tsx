import { Button, Box } from "@mui/material";
import React from "react";

const DropDownMenu = props => {
  const {
    Icon,
    title,
    setModalType,
    setOpen,
    collection,
    okrData,
    setOkrData,
    setCollection,
    setEdit,
    krIndex,
    okrIndex,
  } = props;
  const change = () => {
    if (title === "Change Period") {
      setModalType("quarter");
      setOpen(true);
    }
    if (title === "Change Type/values") {
      setModalType("width");
      setOpen(true);
    }
    if (title === "Change KR weights") {
      setModalType("points");
      setOpen(true);
    }
    if (title === "Delete to") {
      setOkrData(okrData.filter((_el, index) => index !== okrIndex));
    }
    if (title === "Edit Result") {
      setEdit({ result: true, goals: false, resultIndex: krIndex });
    }
    if (title === "Delete Result") {
      const deleteData = okrData.map((el, matchindex) => {
        if (matchindex === okrIndex) {
          const element = el;
          element.child = el.child.filter((_el1, index) => krIndex !== index);
          return element;
        }
        return el;
      });
      setOkrData([...deleteData]);
    }

    if (title === "Edit") setEdit({ result: false, goals: true });
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
