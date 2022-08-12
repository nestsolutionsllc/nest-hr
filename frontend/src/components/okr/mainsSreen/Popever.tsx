import React, { ReactNode } from "react";
import { Popover } from "@mui/material";
import { DeleteOutlineOutlined, Edit } from "@mui/icons-material";
import DropDownMenu from "./DropDownMenu";

const PopeverDown = props => {
  const {
    handleClose,
    setModalType,
    setOkrData,
    okrData,
    setCollection,
    collection,
    setOpen,
    openPop,
    setEdit,
    okrIndex,
  } = props;
  type MoreType = {
    title: string;
    Icon: ReactNode;
  };
  const MoreData: MoreType[] = [
    { title: "Edit", Icon: <Edit /> },
    { title: "Delete to", Icon: <DeleteOutlineOutlined /> },
  ];
  const ResultData: MoreType[] = [
    { title: "Edit Result", Icon: <Edit /> },
    { title: "Delete Result", Icon: <DeleteOutlineOutlined /> },
  ];
  return (
    <Popover
      open={openPop}
      anchorEl={collection.anchorEl}
      onClose={handleClose}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
    >
      {collection.type === "dad"
        ? ResultData.map((el, ind) => {
            return (
              <DropDownMenu
                Icon={el.Icon}
                title={el.title}
                setModalType={setModalType}
                collection={collection}
                setOpen={setOpen}
                okrData={okrData}
                setOkrData={setOkrData}
                setEdit={setEdit}
                krIndex={collection.index}
                setCollection={setCollection}
                key={ind}
                okrIndex={okrIndex}
              />
            );
          })
        : MoreData.map((el, ind) => (
            <DropDownMenu
              Icon={el.Icon}
              title={el.title}
              setCollection={setCollection}
              collection={collection}
              setModalType={setModalType}
              setOpen={setOpen}
              okrData={okrData}
              setOkrData={setOkrData}
              setEdit={setEdit}
              krIndex={collection.index}
              key={ind}
              okrIndex={okrIndex}
            />
          ))}
    </Popover>
  );
};

export default PopeverDown;
