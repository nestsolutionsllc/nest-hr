import { Button, Box } from "@mui/material";
import React from "react";

const More = props => {
  const { Icon, title, setType, setOpen, collection, data, setData, setCollection, name, setEdit, ind, ind1 } = props;
  const change = () => {
    if (title === "Change Period") {
      setType("quarter");
      setOpen(true);
    }
    if (title === "Change Type/values") {
      setType("width");
      setOpen(true);
    }
    if (title === "Change KR weights") {
      setType("points");
      setOpen(true);
    }
    if (title === "Delete to") {
      setData(data.filter((_el, index) => index !== ind1));
    }
    if (title === "Edit Result") {
      setEdit({ result: true, goals: false, resultIndex: ind });
    }
    if (title === "Delete Result") {
      const deleteData = data.map(el => {
        if (el.name === name) {
          const element = el;
          element.child = el.child.filter((_el1, index) => ind !== index);
          return element;
        }
        return el;
      });
      setData([...deleteData]);
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
export default More;
