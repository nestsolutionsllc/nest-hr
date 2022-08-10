import React, { CSSProperties } from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { IEmployee } from "../../interfaces/IEmployee";

const expandBtn: CSSProperties = {
  width: "30px",
  height: "30px",
  margin: "auto",
  color: "#227c9d",
  backgroundColor: "#fef9ef",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  border: "2px solid #d3d3d3",
  borderRadius: "50%",
  cursor: "pointer",
};
const icon: CSSProperties = {
  width: "50%",
  display: "flex",
  fontSize: "1rem",
};

const ExpandButton = (node: { data: { _directSubordinates: number }; children: IEmployee }) => {
  console.log("expandButton", node.data._directSubordinates);

  return (
    <>
      {node && (
        <div style={expandBtn}>
          <span>{node.data._directSubordinates}</span>
          {node.children ? <KeyboardArrowUpIcon style={icon} /> : <KeyboardArrowDownIcon style={icon} />}
        </div>
      )}
    </>
  );
};

export default ExpandButton;
