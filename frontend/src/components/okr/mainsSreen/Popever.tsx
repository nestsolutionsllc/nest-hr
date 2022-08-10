import React, { ReactNode } from "react";
import { Popover } from "@mui/material";
// mui Icons
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import ScaleOutlinedIcon from "@mui/icons-material/ScaleOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import EditIcon from "@mui/icons-material/Edit";
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
    { title: "Change Period", Icon: <AccessTimeOutlinedIcon /> },
    { title: "Edit", Icon: <EditIcon /> },
    { title: "Change KR weights", Icon: <ScaleOutlinedIcon /> },
    { title: "Delete to", Icon: <DeleteOutlineOutlinedIcon /> },
  ];
  const ResultData: MoreType[] = [
    { title: "Edit Result", Icon: <EditIcon /> },
    { title: "Delete Result", Icon: <DeleteOutlineOutlinedIcon /> },
    { title: "Change Type/values", Icon: <ScaleOutlinedIcon /> },
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
