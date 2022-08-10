import { AddCircleOutlineOutlined, AddOutlined } from "@mui/icons-material";
import { Box } from "@mui/material";
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
    if (collection.value !== "") {
      okrData[ind].child.push(collection.value);
      setCollection({ ...collection, addResult: false, value: "" });
    }
    setOkrData([...okrData]);
  };

  return (
    <Box>
      {okrData[ind].child.map((el, index: number) => {
        return (
          <Results
            el={el}
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
          <Box>
            <AddOutlined onClick={add} />
            <NoBorder
              id="standard-basic"
              sx={{ ml: 3 }}
              size="small"
              value={collection.value}
              onChange={e => setCollection({ ...collection, value: e.target.value })}
              onKeyPress={e => e.code === "Enter" && add()}
              placeholder="Enter your objective"
              autoFocus
            />
          </Box>
        ) : (
          <Box onClick={() => setCollection({ ...collection, addResult: true })} sx={style.edit}>
            <Box color="#929294" ml={0.2}>
              <AddCircleOutlineOutlined />
            </Box>
            <Box sx={{ ml: 1 }}>Add Key Result</Box>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Details;
