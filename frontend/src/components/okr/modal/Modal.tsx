import React, { FC, SetStateAction, Dispatch, ReactNode } from "react";
import { Box } from "@mui/material";
import Backdrop from "@mui/material/Backdrop";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import { MockType, Person } from "./type";

export const style = {
  body: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "#fff",
    border: "1px solid #fafbfb",
    boxShadow: 24,
  },
  HeadTitle: {
    display: "flex",
    flexDirection: "row",
    borderBottom: "1px solid #fafbfb",
    alignItems: "center",
    justifyContent: "center",
    height: 45,
    p: 4,
  },
  BottomTitle: {
    backgroundColor: "rgba(0,0,0,.05)",
    padding: 2,
    display: "flex",
    justifyContent: "center",
  },
  Row: {
    display: "flex",
    flexDirection: "row",
  },
  text: {
    width: 135,
    color: "#607d8b",
  },
  center: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  color: {
    color: "#455a64",
  },
  buttonColor: {
    backgroundColor: "#2979FF",
    color: "#2979FF",
  },
};
type Parameter = {
  type: string;
  mockData: MockType;
  setMockData: Dispatch<SetStateAction<MockType>>;
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  children: ReactNode;
};
const ModalComp: FC<Parameter> = props => {
  const { mockData, type, setMockData, children, open, setOpen } = props;

  // react usestates
  const use: Person = {
    title: "Tom",
    bodyWidth: 30,
  };

  // conditions
  if (type === "points") {
    use.bodyWidth = 780;
    use.title = "CHANGE KEY RESULT WEIGHTS";
  } else if (type === "quarter") {
    use.bodyWidth = 850;
    use.title = "CHANGE KEY RESULT PARAMETERS ?";
  } else {
    use.bodyWidth = 870;
    use.title = "CHANGE OBJECTIVE PERIOD";
  }

  const Handle = () => setOpen(false);

  const Save = (mock: MockType): void => {
    setMockData({ ...mock });
    setOpen(false);
  };

  const Head: FC = () => {
    return (
      <Box sx={style.HeadTitle}>
        <Box sx={style.color}>{use.title}</Box>
      </Box>
    );
  };
  const Bottom: FC = () => {
    return (
      <Box sx={style.BottomTitle}>
        <Button variant="contained" sx={style.buttonColor[1]} size="large" onClick={() => Save(mockData)}>
          Save
        </Button>
        <Button sx={style.buttonColor[0]} size="large" onClick={Handle}>
          Cancel
        </Button>
      </Box>
    );
  };

  return (
    <>
      <Modal
        disableEnforceFocus
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={Handle}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 1000,
        }}
      >
        <Fade in={open}>
          <Box sx={style.body} style={{ width: use.bodyWidth }}>
            <Head />
            {children}
            <Bottom />
          </Box>
        </Fade>
      </Modal>
    </>
  );
};

export default ModalComp;
