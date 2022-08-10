import React, { CSSProperties } from "react";
import ApartmentIcon from "@mui/icons-material/Apartment";
import { IEmployee } from "../../interfaces/IEmployee";

const nodeContainer: CSSProperties = {
  minHeight: "160px",
  backgroundColor: "#227c9d",
  color: "#227c9d",
  display: "flex",
  justifyContent: "center",
  borderRadius: "1rem",
};
const nodeDetails: CSSProperties = {
  width: "100%",
  padding: "1rem",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
};
const nodeContent: CSSProperties = {
  display: "flex",
  alignItems: "center",
};
const nodeTeam: CSSProperties = {
  width: "100%",
  textAlign: "center",
};
const nodeTeamName: CSSProperties = {
  marginBottom: "0.5rem",
  color: "#fef9ef",
  fontSize: "1.5rem",
};
const nodeTeamMemberImg: CSSProperties = {
  width: "50px",
  height: "50px",
  borderRadius: "50%",
  margin: "0.2rem",
};
const nodeImg: CSSProperties = {
  width: "90px",
  height: "90px",
  borderRadius: "1rem",
};
const nodeInfo: CSSProperties = {
  marginLeft: "1.5rem",
  color: "#fef9ef",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-evenly",
};
const nodeName: CSSProperties = {
  paddingBottom: "0.3rem",
  fontSize: "1.5rem",
  fontWeight: "bold",
};
const nodeRole: CSSProperties = {
  paddingBottom: "0.5rem",
  fontSize: "1.2rem",
};
const nodeDepartment: CSSProperties = {
  width: "max-content",
  padding: "0.3rem",
  textAlign: "center",
  display: "flex",
  alignItems: "center",
  backgroundColor: "#ffcb77",
  borderRadius: "1rem",
  color: "#227c9d",
};
const nodeDepartmentName: CSSProperties = {
  margin: "0 0.3rem",
};
const NodeContent = (props: { data: IEmployee; _children: [{ data: IEmployee }] }) => {
  console.log(props);
  return (
    <div style={nodeContainer}>
      <div style={nodeDetails}>
        {props.data.team === "" ? (
          <div style={nodeContent}>
            <img style={nodeImg} src={props.data.imageUrl} alt="Profile" />
            <div style={nodeInfo}>
              <div style={nodeName}>{props.data.givenName}</div>
              <div style={nodeRole}>{props.data.positionName}</div>
              {props.data.department && (
                <div style={nodeDepartment}>
                  <ApartmentIcon />
                  <div style={nodeDepartmentName}>{props.data.department}</div>
                </div>
              )}
            </div>
          </div>
        ) : (
          <div style={nodeTeam}>
            <div style={nodeTeamName}>{props.data.team}</div>
            {props._children !== null &&
              props._children
                .slice(0, 4)
                .map(child => (
                  <img key={child.data.id} style={nodeTeamMemberImg} src={child.data.imageUrl} alt="team member" />
                ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default NodeContent;
