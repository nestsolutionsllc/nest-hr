import React, { FC, CSSProperties } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { IEmployee } from "../../interfaces/IEmployee";

const card: React.CSSProperties = {
  position: "absolute",
  top: "60px",
  right: "0",
  width: "25%",
  height: "75%",
  padding: "2rem",
  margin: "2rem",
  backgroundColor: "#fef9ef",
  borderRadius: "1rem",
  border: "1px solid #d3d3d3",
  overflowY: "scroll",
};
const cardCloseBtn: CSSProperties = {
  position: "absolute",
  top: "10px",
  right: "10px",
  width: "30px",
  height: "30px",
  color: "red",
  backgroundColor: "#fef9ef",
  borderRadius: "50%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  border: "2px solid #227c9d",
  cursor: "pointer",
};

const cardHeader: CSSProperties = {
  textAlign: "center",
};
const cardImg: CSSProperties = {
  width: "120px",
  borderRadius: "1rem",
};
const cardName: CSSProperties = {
  marginTop: "1rem",
  fontSize: "1.5rem",
  fontWeight: "bold",
};
const cardRole: CSSProperties = {
  margin: "1rem 0",
  fontSize: "1.2rem",
};
const cardBody: CSSProperties = {
  display: "flex",
  justifyContent: "space-evenly",
  flexDirection: "column",
};
const cardBodyTeamMembers: CSSProperties = {
  height: "23vh",
  overflowY: "scroll",
};
const cardItem: CSSProperties = {
  width: "100%",
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-between",
  alignItems: "center",
  fontSize: "0.9rem",
};
const cardItemLabel: CSSProperties = {
  margin: "0.5rem 0",
  fontWeight: "bold",
};
const cardItemValue: CSSProperties = {
  textAlign: "justify",
};
const cardItemTeam: CSSProperties = {
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
};
const cardItemImg: CSSProperties = {
  width: "50px",
  height: "50px",
  margin: "0.2rem",
  borderRadius: "50%",
};
const cardItemName: CSSProperties = {
  marginLeft: "0.5rem",
  fontWeight: "bold",
};
const cardItemRole: CSSProperties = {
  fontSize: "0.8rem",
  marginLeft: "0.5rem",
};
// };

type ComponentProps = { employees: IEmployee[]; employee: IEmployee; handleClose: () => any };

const EmployeeDetails: FC<ComponentProps> = props => {
  return (
    <div style={card}>
      <button style={cardCloseBtn} onClick={props.handleClose}>
        <CloseIcon />
      </button>
      {props.employee.team === "" ? (
        <div>
          <div style={cardHeader}>
            <img style={cardImg} src={props.employee.imageUrl} alt="Profile" />
            <h2 style={cardName}>{props.employee.givenName}</h2>
            <p style={cardRole}>{props.employee.positionName}</p>
          </div>
          <div style={cardBody}>
            <div style={cardItem}>
              <p style={cardItemLabel}>Phone:</p>
              <p style={cardItemValue}>{props.employee.phone}</p>
            </div>
            <div style={cardItem}>
              <p style={cardItemLabel}>Email:</p>
              <p style={cardItemValue}>{props.employee.email}</p>
            </div>
            <div style={cardItem}>
              <p style={cardItemLabel}>Location:</p>
              <p style={cardItemValue}>{props.employee.location}</p>
            </div>
            {props.employee.department && (
              <div style={cardItem}>
                <p style={cardItemLabel}>Department:</p>
                <p style={cardItemValue}>{props.employee.department}</p>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div>
          <div style={cardHeader}>
            <h2> Team</h2>
          </div>
          <h4>Team Members:</h4>
          <div style={cardBodyTeamMembers}>
            {props.employees
              .filter(employee => employee.parentId === props.employee.id.toString())
              .map(employee => (
                <div style={cardItemTeam} key={employee.id}>
                  <img style={cardItemImg} src={employee.imageUrl} alt="Profile" />
                  <p style={cardItemName}>{employee.givenName}</p>
                  <p style={cardItemRole}>{employee.positionName}</p>
                </div>
              ))}
          </div>
        </div>
      )}
      <div style={cardItem}>
        <p style={cardItemLabel}>Description:</p>
        <p style={cardItemValue}>{props.employee.description}</p>
      </div>
    </div>
  );
};

export default EmployeeDetails;
