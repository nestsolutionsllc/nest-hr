import React from "react";
import ApartmentIcon from "@mui/icons-material/Apartment";
import styles from "./SubContent.module.css";
import { IEmployee } from "../../interfaces/IEmployee";

const SubContent = (props: { data: IEmployee }) => {
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

export default SubContent;
