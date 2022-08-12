import React, { FC, useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import CancelIcon from "@mui/icons-material/Cancel";
import { Box, Button, Stack } from "@mui/material";
import _ from "lodash";
import SeatPlanModal from "./SeatPlanModal";
import SeatPlanCell from "./SeatPlanCell";

interface SeatPlanProps {
  empData: Array<any>;
  seatData: Array<any>;
  bgPath?: string;
  rowCount?: number;
  colCount?: number;
  colWidth?: number;
  colHeight?: number;
}

const SeatPlan: FC<SeatPlanProps> = ({
  empData,
  seatData,
  bgPath = "/assets/images/plan.jpg",
  rowCount = 15,
  colCount = 20,
  colWidth = 42,
  colHeight = 42,
}) => {
  const styles = {
    tableWrapper: {
      minHeight: "80vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
      position: "relative",
    },
    table: {
      backgroundImage: `url(${bgPath})`,
      backgroundPosition: "center center",
      backgroundSize: "contain",
    },
    row: {
      display: "flex",
    },
    col: {
      width: colWidth,
      height: colHeight,
      textAlign: "center",
      boxSizing: "border-box",
    },
    btnContainer: {
      marginBottom: 1,
    },
  };

  const [showModal, setShowModal] = useState(false);
  const [isEdit, setIsEdit] = useState(true);
  const [employees, setEmployees] = useState(empData);
  const [seats, setSeats] = useState(seatData);
  const [actionPosition, setActionPosition] = useState(null);

  /*
   *  To find seat that exists on given x & y
   * Input: x, y coordinates
   * Output: {posX: x, posY: y} || undefined
   *  */
  const getTableCell = (x, y) => _.find(seats, item => item.posX === x && item.posY === y);

  /*
   * To find employee that exists on given x & y
   * Input: x, y coordinates
   * Output: userData || undefined
   *  */
  const getEmployeeCell = (x, y) => _.find(employees, item => item.seatX === x && item.seatY === y);

  /*
   * To show change seat employee
   * Input: x, y coordinates
   * Output: userData || undefined
   *  */
  const showAssignModal = (x, y) => {
    setShowModal(true);
    setActionPosition({ posX: x, posY: y });
  };

  /*
   * To assign employee to seat
   * Input: employeeData
   * Output: {
   *    success: false || true,
   *    message: ${RESPONSE_MESSAGE},
   *  }
   * Response message will be used later on toast
   *  */
  const assignEmployee = employee => {
    if (actionPosition === null)
      return {
        success: false,
        message: "Position not found!",
      };
    if (!getTableCell(actionPosition.posX, actionPosition.posY)) {
      return {
        success: false,
        message: "Seat not found!",
      };
    }
    const employeeCell = getEmployeeCell(actionPosition.posX, actionPosition.posY);
    if (employeeCell) {
      return {
        success: false,
        message: "Cannot stack employee!",
      };
    }
    const emps = [...employees];
    _.remove(emps, emp => {
      return emp.id === employee.id;
    });
    // eslint-disable-next-line no-param-reassign
    employee.seatX = actionPosition.posX;
    // eslint-disable-next-line no-param-reassign
    employee.seatY = actionPosition.posY;
    setEmployees(_.concat(employee, emps));
    return {
      success: true,
      message: "Success!",
    };
  };

  return (
    <Stack>
      <Box>
        {showModal && (
          <SeatPlanModal
            showModal={showModal}
            setShowModal={setShowModal}
            employees={employees}
            assignEmployee={assignEmployee}
          />
        )}
        <Box sx={styles.tableWrapper}>
          <Box sx={styles.btnContainer}>
            <Button
              variant={"contained"}
              startIcon={isEdit ? <CancelIcon /> : <EditIcon />}
              onClick={() => setIsEdit(!isEdit)}
            >
              {isEdit ? "Cancel" : "Edit"}
            </Button>
          </Box>
          <Box>
            <Box sx={styles.table}>
              {_.map([...Array(rowCount)], (y, rowIndex) => {
                return (
                  <Box key={rowIndex} sx={styles.row}>
                    {_.map([...Array(colCount)], (x, colIndex) => {
                      return (
                        <Box sx={styles.col} key={colIndex}>
                          <SeatPlanCell
                            seats={seats}
                            employees={employees}
                            posY={rowIndex}
                            posX={colIndex}
                            isEdit={isEdit}
                            getSeatCell={getTableCell}
                            setSeats={setSeats}
                            getEmployeeCell={getEmployeeCell}
                            showAssignModal={showAssignModal}
                          />
                        </Box>
                      );
                    })}
                  </Box>
                );
              })}
            </Box>
          </Box>
        </Box>
      </Box>
    </Stack>
  );
};

export default SeatPlan;
