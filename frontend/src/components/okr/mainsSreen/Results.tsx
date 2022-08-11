import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import MoreIcon from "@mui/icons-material/MoreVert";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { NoBorder } from "./styledComponents";
import KRComment from "../KRComment/KRComment";

const style = {
  KR: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: 2,
    borderBottom: "1px solid #eceff1",
    marginLeft: 7,
  },
  check: {
    display: "flex",
    flexdirection: "row",
  },
  marginLeft: {
    marginLeft: "10px",
    cursor: "pointer",
    color: "gray",
  },
};

const Results = props => {
  const { el, index, setCollection, collection, edit, setEdit } = props;
  const handleClick = (e, ind: number) => {
    setCollection({ ...collection, index: ind, addResult: false, anchorEl: e.currentTarget, type: "dad" });
  };
  const [newCol, setNew] = useState(el);
  useEffect(() => {
    setNew(el);
  }, [el]);
  return (
    <Box sx={style.KR}>
      <Box sx={style.check}>
        <Box mr={1} color="#1990ff">
          <CheckCircleOutlineIcon />
        </Box>
        {edit.resultIndex === index ? (
          <NoBorder
            InputProps={{
              endAdornment: <EditIcon />,
            }}
            id="standard-basic"
            sx={{ width: "auto" }}
            size="small"
            value={newCol}
            autoFocus
            onChange={e => setNew(e.target.value)}
            onKeyPress={e => e.code === "Enter" && setEdit({ ...edit, resultIndex: false })}
          />
        ) : (
          <Box>{newCol}</Box>
        )}
      </Box>
      <Box sx={style.check}>
        <KRComment />
        <MoreIcon
          onClick={e => {
            e.stopPropagation();
            handleClick(e, index);
          }}
          sx={style.marginLeft}
        />
      </Box>
    </Box>
  );
};

export default Results;
