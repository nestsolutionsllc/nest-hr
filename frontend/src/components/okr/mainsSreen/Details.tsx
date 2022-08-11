import { AddCircleOutlineOutlined, AddOutlined } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";
import React from "react";
import Results from "./Results";
import { NoBorder } from "./styledComponents";

const style = {
  slider: {
    width: "60%",
  },
  word: {
    fontSize: "12px",
    color: "#b0bec5",
    display: "flex",
    margin: "4px 10px 0px 60px",
  },
  results: {
    display: "flex",
    alignItems: "center",
    margin: "16px 0px 0px 54px",
    cursor: "pointer",
  },
  edit: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
};

const Details = props => {
  const { okrData, ind, collection, setCollection, setOkrData, setEdit, edit } = props;
  const add = () => {
    if (collection.value.trim() === "") return;
    okrData[ind].krList.push({ kr: collection.value, comments: [] });
    setCollection({ ...collection, addResult: false, value: "" });
    setOkrData([...okrData]);
  };
  return (
    <Box>
      {okrData[ind].krList.map((el, index: number) => {
        return (
          <Results
            el={el.kr}
            index={index}
            setCollection={setCollection}
            edit={edit}
            collection={collection}
            key={index}
            setEdit={setEdit}
          />
        );
      })}

      <Box sx={style.results}>
        {collection.addResult ? (
          <Box sx={style.edit}>
            <AddOutlined onClick={add} color={"disabled"} />
            <NoBorder
              id="standard-basic"
              sx={{ ml: "10px" }}
              size="small"
              value={collection.value}
              onChange={e => setCollection({ ...collection, value: e.target.value })}
              onKeyPress={e => e.code === "Enter" && add()}
              placeholder="Enter your objective"
              autoFocus
            />
            <Button onClick={() => setCollection({ ...collection, addResult: false })}>Cancel</Button>
          </Box>
        ) : (
          <Box onClick={() => setCollection({ ...collection, addResult: true })} sx={style.edit}>
            <AddCircleOutlineOutlined color={"disabled"} sx={{ marginLeft: 0.2 }} />
            <Typography color={"GrayText"} marginLeft={"10px"}>
              Add Key Result
            </Typography>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Details;
