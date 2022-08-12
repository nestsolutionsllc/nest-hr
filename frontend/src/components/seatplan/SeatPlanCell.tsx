import { Avatar, Box, Tooltip } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import LaptopChromebookIcon from "@mui/icons-material/LaptopChromebook";
import AddIcon from "@mui/icons-material/Add";
import React, { FC } from "react";
import _ from "lodash";

interface SeatPlanCellProps {
  posX: number;
  posY: number;
  employees: Array<any>;
  seats: Array<any>;
  setSeats: any;
  getSeatCell: any;
  getEmployeeCell: any;
  isEdit: boolean;
  showAssignModal: any;
}

const styles = {
  avatar: {
    cursor: "pointer",
    display: "inline-block",
    width: 40,
    height: 40,
  },
  seatCell: {
    width: 40,
    height: 40,
    background: "rgba(221, 221, 221,0.5)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
};
const SeatPlanCell: FC<SeatPlanCellProps> = ({
  posX,
  posY,
  employees,
  seats,
  setSeats,
  getSeatCell,
  getEmployeeCell,
  isEdit,
  showAssignModal,
}) => {
  const addSeat = (x, y) => setSeats([...seats, { posX: x, posY: y }]);

  const removeSeatCell = (x, y) => setSeats(_.filter(seats, item => !(item.posX === x && item.posY === y)));

  if (!employees) return <></>;

  const seatCell = getSeatCell(posX, posY);
  if (seatCell) {
    const employee = getEmployeeCell(posX, posY);
    if (employee) {
      return (
        <Tooltip title={`Hi, I am ${employee.name}`}>
          <Avatar sx={styles.avatar} src={employee.imageUrl && employee.imageUrl} />
        </Tooltip>
      );
    }
    return (
      <Box sx={styles.seatCell}>
        {isEdit ? (
          <Tooltip title={`Remove seat cell`}>
            <IconButton onClick={() => removeSeatCell(posX, posY)}>
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        ) : (
          <Tooltip title={`Empty seat`}>
            <IconButton onClick={() => showAssignModal(posX, posY)}>
              <LaptopChromebookIcon />
            </IconButton>
          </Tooltip>
        )}
      </Box>
    );
  }
  if (isEdit) {
    return (
      <Tooltip title={`Add seat`}>
        <IconButton onClick={() => addSeat(posX, posY)}>
          <AddIcon />
        </IconButton>
      </Tooltip>
    );
  }
  return <></>;
};

export default SeatPlanCell;
