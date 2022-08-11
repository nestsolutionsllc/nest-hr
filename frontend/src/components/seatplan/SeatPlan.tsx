import React, { useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import CancelIcon from "@mui/icons-material/Cancel";
import { Box, Button, Stack } from "@mui/material";
import _ from "lodash";
import SeatPlanModal from "./SeatPlanModal";
import SeatPlanCell from "./SeatPlanCell";

export default function SeatPlan({ empData, seatData, bgPath, size }) {
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
      borderCollapse: "collapse",
      backgroundImage: `url(${bgPath})`,
      backgroundPosition: "center center",
      backgroundSize: "contain",
    },
    col: {
      width: 42,
      height: 42,
      textAlign: "center",
      borderCollapse: "collapse",
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

  const getTableCell = (x, y) => _.find(seats, item => item.posX === x && item.posY === y);

  const getEmployeeCell = (x, y) => _.find(employees, item => item.seatX === x && item.seatY === y);

  const showAssignModal = (x, y) => {
    setShowModal(true);
    setActionPosition({ posX: x, posY: y });
  };

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
            <table style={styles.table}>
              <tbody>
                {_.map([...Array(size.rows)], (y, rowIndex) => {
                  return (
                    <tr key={rowIndex}>
                      {_.map([...Array(size.cols)], (x, colIndex) => {
                        return (
                          <td style={styles.col} key={colIndex}>
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
                          </td>
                        );
                      })}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </Box>
        </Box>
      </Box>
    </Stack>
  );
}
