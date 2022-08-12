import React from "react";
import ApartmentIcon from "@mui/icons-material/Apartment";
import { IEmployee } from "../../interfaces/IEmployee";
import styles from "./NodeContent.module.css";

const NodeContent = (props: { data: IEmployee; _children: [{ data: IEmployee }] }) => {
  return (
    <div className={styles.container}>
      <div className={styles.node}>
        <img key={props.data.id} className={styles.userImg} src={props.data.imageUrl} alt="team member" />
        <div className={styles.mr15}>
          <div className={styles.nodeName}>{props.data.givenName}</div>
          <div className={styles.nodePositionName}>{props.data.positionName}</div>
        </div>
      </div>

      {props.data.department && (
        <div className={styles.nodeDepartment}>
          <ApartmentIcon />
          <div className={styles.nodeDepartmentName}>{props.data.department}</div>
        </div>
      )}
    </div>
  );
};

export default NodeContent;
