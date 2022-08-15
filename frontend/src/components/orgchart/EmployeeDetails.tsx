import React, { FC } from "react";
import CloseIcon from "@mui/icons-material/Close";
import styles from "./EmployeeDetails.module.css";
import { IEmployee } from "../../interfaces/IEmployee";

type ComponentProps = { employees: IEmployee[]; employee: IEmployee; handleClose: () => any };
const EmployeeDetails: FC<ComponentProps> = ({ employees, employee, handleClose }) => {
  return (
    <>
      <div className={styles.card}>
        <button className={styles.cardCloseBtn} onClick={handleClose}>
          <CloseIcon />
        </button>

        {employee.team === "" ? (
          <div>
            <div className={styles.cardHeader}>
              <img className={styles.cardImg} src={employee.imageUrl} alt="Profile" />
              <h2 className={styles.cardName}>{employee.givenName}</h2>
              <p className={styles.cardRole}>{employee.positionName}</p>
            </div>
            <div className={styles.cardBody}>
              <div className={styles.cardItem}>
                <p className={styles.cardItemLabel}>Phone:</p>
                <p className={styles.cardItemValue}>{employee.phone}</p>
              </div>
              <div className={styles.cardItem}>
                <p className={styles.cardItemLabel}>Email:</p>
                <p className={styles.cardItemValue}>{employee.email}</p>
              </div>
              <div className={styles.cardItem}>
                <p className={styles.cardItemLabel}>Location:</p>
                <p className={styles.cardItemValue}>{employee.location}</p>
              </div>
              {employee.department && (
                <div className={styles.cardItem}>
                  <p className={styles.cardItemLabel}>Department:</p>
                  <p className={styles.cardItemValue}>{employee.department}</p>
                </div>
              )}
            </div>
          </div>
        ) : (
          <div>
            <div className={styles.cardHeader}>
              <h2> Team</h2>
            </div>
            <h4>Team Members:</h4>
            <div className={styles.cardBodyTeamMembers}>
              {employees
                .filter(employe => employe.parentId === employee.id.toString())
                .map(employeeInfo => (
                  <div className={styles.cardItemTeam} key={employeeInfo.id}>
                    <img className={styles.cardItemImg} src={employeeInfo.imageUrl} alt="Profile" />
                    <p className={styles.cardItemName}>{employeeInfo.givenName}</p>
                    <p className={styles.cardItemRole}>{employeeInfo.positionName}</p>
                  </div>
                ))}
            </div>
          </div>
        )}
        <div className={styles.cardItem}>
          <p className={styles.cardItemLabel}>Description:</p>
          <p className={styles.cardItemValue}>{employee.description}</p>
        </div>
      </div>
    </>
  );
};

export default EmployeeDetails;
