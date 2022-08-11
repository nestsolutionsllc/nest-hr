import { FC, Dispatch, SetStateAction, useState } from "react";
import { Typography, Modal, Box, Backdrop, Stack, Button } from "@mui/material";
import MoveDownIcon from "@mui/icons-material/MoveDown";
import MoveToInboxIcon from "@mui/icons-material/MoveToInbox";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import { DataGrid, GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import { LoadingButton } from "@mui/lab";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

interface ModalProps {
  showModal: boolean;
  setShowModal: Dispatch<SetStateAction<boolean>>;
  employees: Array<any>;
  assignEmployee: any;
}

const styles = {
  container: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "50vw",
    bgcolor: "background.paper",
    border: "1px #000",
    borderRadius: 2,
    boxShadow: 24,
    p: 4,
  },
};

const SeatPlanModal: FC<ModalProps> = ({ showModal, setShowModal, employees, assignEmployee }) => {
  const [modalLoading, setModalProcessing] = useState(false);
  const [dialogLoading, setDialogProcessing] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [employee, setEmployee] = useState(null);

  const handleClose = () => {
    setShowModal(false);
    setModalProcessing(false);
    setDialogOpen(false);
    setEmployee(null);
  };

  const dialogHandleDisagree = () => {
    if (dialogLoading) return;
    setModalProcessing(false);
    setDialogOpen(false);
    setEmployee(null);
  };

  const dialogHandleAgree = () => {
    setDialogProcessing(true);
    const assignEmployeeRes = assignEmployee(employee);
    if (assignEmployeeRes.success) handleClose();
  };

  const handleChangeSeat = emp => {
    setModalProcessing(true);
    setDialogOpen(true);
    setEmployee(emp);
  };

  const handleAssignSeat = emp => {
    // TODO this response will be used as toast message later
    // const assignEmployeeRes = assignEmployee(emp);
    assignEmployee(emp);
    handleClose();
  };

  const columns: GridColDef[] = [
    { field: "id", headerName: "Id", width: 10 },
    { field: "name", headerName: "Name", width: 150 },
    { field: "positionName", headerName: "Role", width: 200 },
    { field: "department", headerName: "Department", width: 100 },
    {
      headerName: "Action",
      filterable: false,
      type: "actions",
      field: "",
      width: 200,
      renderCell: (params: GridRenderCellParams<any>) => {
        if (typeof params.row.seatX !== "undefined" && typeof params.row.seatY !== "undefined") {
          return (
            <LoadingButton
              startIcon={<MoveDownIcon />}
              tabIndex={params.hasFocus ? 0 : -1}
              variant="outlined"
              size="small"
              onClick={() => handleChangeSeat(params.row)}
              loading={modalLoading}
            >
              Change seat
            </LoadingButton>
          );
        }
        return (
          <LoadingButton
            startIcon={<MoveToInboxIcon />}
            onClick={() => handleAssignSeat(params.row)}
            variant="contained"
            size="small"
            loading={modalLoading}
            tabIndex={params.hasFocus ? 0 : -1}
          >
            Choose seat
          </LoadingButton>
        );
      },
    },
  ];

  return (
    <>
      <Dialog
        open={dialogOpen}
        onClose={dialogHandleDisagree}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Are you sure about?</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {employee && (
              <>
                <strong>#{employee.id}</strong> <strong>{employee.name}</strong> have a seat you wanna change it?
              </>
            )}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          {!dialogLoading && (
            <Button startIcon={<CloseIcon />} variant={"outlined"} color="error" onClick={dialogHandleDisagree}>
              Disagree
            </Button>
          )}
          <LoadingButton
            loadingIndicator={"Loading..."}
            startIcon={<CheckIcon />}
            loading={dialogLoading}
            variant={"contained"}
            onClick={dialogHandleAgree}
            autoFocus
          >
            Agree
          </LoadingButton>
        </DialogActions>
      </Dialog>

      <Modal
        open={showModal}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Box sx={styles.container}>
          <Stack>
            {/* Modal header */}
            <Typography fontWeight={"bold"} color={"black"} margin={1} variant="h5">
              Assign employee seat
            </Typography>
            {/* Modal body */}
            <div style={{ height: 400, width: "100%" }}>
              <DataGrid rows={employees} columns={columns} pageSize={25} />
            </div>
          </Stack>
        </Box>
      </Modal>
    </>
  );
};

export default SeatPlanModal;
