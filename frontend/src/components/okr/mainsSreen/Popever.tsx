import React, { ReactNode } from "react";
import { Popover } from "@mui/material";
// mui Icons
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import ScaleOutlinedIcon from "@mui/icons-material/ScaleOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import EditIcon from "@mui/icons-material/Edit";
import More from "./More";

const PopeverDown = props => {
  const { handleClose, setType, setData, data, collection, setOpen, openPop, setCollection, setEdit, ind1 } = props;
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
              <More
                Icon={el.Icon}
                title={el.title}
                setType={setType}
                collection={collection}
                setOpen={setOpen}
                data={data}
                setData={setData}
                name={collection.newTitle}
                setEdit={setEdit}
                ind={collection.index}
                setCollection={setCollection}
                key={ind}
                ind1={ind1}
              />
            );
          })
        : MoreData.map((el, ind) => (
            <More
              Icon={el.Icon}
              title={el.title}
              setCollection={setCollection}
              collection={collection}
              setType={setType}
              setOpen={setOpen}
              data={data}
              setData={setData}
              name={collection.newTitle}
              setEdit={setEdit}
              ind={collection.index}
              key={ind}
              ind1={ind1}
            />
          ))}
    </Popover>
  );
};

export default PopeverDown;
