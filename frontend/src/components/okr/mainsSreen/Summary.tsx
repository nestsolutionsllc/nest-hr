import { Box, IconButton, Typography } from "@mui/material";
import React from "react";
import EditIcon from "@mui/icons-material/Edit";
import MoreIcon from "@mui/icons-material/MoreVert";
import { BorderLinearProgress, NoBorder } from "./styledComponents";

const style = {
  Icon: {
    display: "flex",
    flexGrow: 1,
    justifyContent: "end",
  },
  calendar: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  bottom: {
    display: "flex",
    fontSize: "12px",
    justifyContent: "space-between",
    width: "300px",
    alignItems: "center",
  },
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
};
const Summary = props => {
  const { collection, edit, setCollection, setEdit, okrData, ind, setOkrData } = props;
  const handleClick = event => {
    setCollection({ ...collection, anchorEl: event.currentTarget, type: "child" });
  };
  const Edit = () => {
    const newData = okrData;
    newData[ind].title = collection.newTitle;
    setOkrData([...newData]);
    setEdit(false);
  };
  return (
    <Box sx={style.container} ml={1}>
      <Box>
        {edit.goals ? (
          <NoBorder
            InputProps={{
              endAdornment: <EditIcon />,
            }}
            id="standard-basic"
            size="small"
            fullWidth
            value={collection.newTitle}
            onChange={e => setCollection({ ...collection, newTitle: e.target.value })}
            onKeyPress={e => e.code === "Enter" && Edit()}
            placeholder="edit"
            autoFocus
          />
        ) : (
          <Typography sx={{ fontWeight: 700 }}>{collection.newTitle}</Typography>
        )}
        <Box sx={style.bottom} mt={2}>
          <Box sx={style.calendar}>
            <BorderLinearProgress variant="determinate" value={30} sx={{ width: 150 }} />
            <Box ml={2}>30%</Box>
          </Box>
          <Box color="#929294">Owner</Box>
        </Box>
      </Box>
      <Box sx={{ display: "flex" }}>
        <Box sx={style.Icon}>
          <IconButton
            onClick={event => {
              event.stopPropagation();
              handleClick(event);
            }}
          >
            <MoreIcon />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default Summary;
