import { createContext, useContext, ReactNode, FC, useState } from "react";
import { Fade, Backdrop, Box, Modal, Stack, Typography } from "@mui/material";

interface ModalProviderProps {
  children: ReactNode;
}

interface ModalProps {
  title?: string;
  header?: ReactNode;
  body: ReactNode;
  footer?: ReactNode;
  size?: "small" | "medium" | "large";
  onHide?: () => void;
}

interface ModalContextInterface {
  showModal: any;
  hideModal: () => void;
}

const ModalContext = createContext<ModalContextInterface>({} as ModalContextInterface);

export const ModalProvider: FC<ModalProviderProps> = ({ children }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState(null);
  const [modalHeader, setModalHeader] = useState(null);
  const [modalBody, setModalBody] = useState(null);
  const [modalFooter, setModalFooter] = useState(null);
  const [modalWidth, setModalWidth] = useState("600");
  const [modalOnHide, setModalOnHide] = useState(null);

  const styles = {
    container: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: modalWidth,
      bgcolor: "background.paper",
      border: "1px #000",
      borderRadius: 2,
      boxShadow: 24,
      p: 4,
    },
  };

  const showModal = ({ title, header, body = <></>, footer, size = "medium", onHide }: ModalProps) => {
    switch (size) {
      case "small":
        setModalWidth("600px");
        break;
      case "large":
        setModalWidth("75vh");
        break;
      default:
        setModalWidth("1200px");
    }
    if (title) setModalTitle(title);
    if (header) setModalHeader(header);
    if (footer) setModalFooter(footer);
    setModalBody(body);
    setModalOpen(true);
    setModalOnHide(onHide);
  };

  const hideModal = () => {
    setModalWidth("600");
    setModalOpen(false);
    setModalTitle(null);
    setModalHeader(null);
    setModalBody(<></>);
    setModalFooter(null);
    if (modalOnHide) modalOnHide();
    setModalOnHide(null);
  };

  return (
    <ModalContext.Provider value={{ showModal, hideModal }}>
      <Modal
        open={modalOpen}
        onClose={hideModal}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={modalOpen}>
          <Box sx={styles.container}>
            <Stack>
              {/*
               * Modal header when modalHeader and modalTitle both null there will be no header
               */}
              {modalHeader || modalTitle ? (
                modalHeader || (
                  <Typography fontWeight={"bold"} color={"black"} margin={1} variant="h5">
                    {modalTitle}
                  </Typography>
                )
              ) : (
                <></>
              )}
              {/* Modal body */}
              {modalBody}
              {modalFooter}
            </Stack>
          </Box>
        </Fade>
      </Modal>
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = (): ModalContextInterface => {
  const ctx = useContext(ModalContext);
  return {
    showModal: ctx.showModal,
    hideModal: ctx.hideModal,
  };
};
