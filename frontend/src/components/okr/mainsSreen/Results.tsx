import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Edit, MoreVert, CheckCircleOutline } from "@mui/icons-material";
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
  const { el, krIndex, okrIndex, setCollection, collection, edit, setEdit } = props;
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
          <CheckCircleOutline />
        </Box>
        {edit.resultIndex === krIndex ? (
          <NoBorder
            InputProps={{
              endAdornment: <Edit />,
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
        <KRComment krIndex={krIndex} okrIndex={okrIndex} />
        <MoreVert
          onClick={e => {
            e.stopPropagation();
            handleClick(e, krIndex);
          }}
          sx={style.marginLeft}
        />
      </Box>
    </Box>
  );
};

export default Results;
