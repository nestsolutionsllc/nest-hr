import React from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { IEmployee } from "../../interfaces/IEmployee";

const styles = {
  expandBtn: {
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
  },
  icon: {
    width: "50%",
    display: "flex",
    fontSize: "1rem",
  },
};

const ExpandButton = (node: { data: { _directSubordinates: number }; children: IEmployee }) => {
  return (
    <>
      {node && (
        <div style={styles.expandBtn}>
          <span>{node.data._directSubordinates}</span>
          {node.children ? <KeyboardArrowUpIcon style={styles.icon} /> : <KeyboardArrowDownIcon style={styles.icon} />}
        </div>
      )}
    </>
  );
};

export default ExpandButton;
