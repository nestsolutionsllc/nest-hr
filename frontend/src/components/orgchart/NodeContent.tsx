import React, { FC } from "react";
import ApartmentIcon from "@mui/icons-material/Apartment";
import { IEmployee } from "../../interfaces/IEmployee";
import styles from "./NodeContent.module.css";

interface NodeContentProps {
  data: IEmployee;
  _children: [{ data: IEmployee }];
}

const NodeContent: FC<NodeContentProps> = ({ data, _children }) => {
  console.log(_children);

  return (
    <div className={styles.container}>
      <div className={styles.node}>
        <div className={styles.textAlign}>
          <img key={data.id} className={styles.userImg} src={data.imageUrl} alt="team member" />
        </div>
        <div className={styles.mr15}>
          <div className={styles.nodeName}>{data.givenName}</div>
          <div className={styles.nodePositionName}>{data.positionName}</div>
        </div>
      </div>

      {data.department && (
        <div className={styles.nodeDepartment}>
          <ApartmentIcon />
          <div className={styles.nodeDepartmentName}>{data.department}</div>
        </div>
      )}
    </div>
  );
};

export default NodeContent;
