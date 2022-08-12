import { Box, Button } from "@mui/material";
import _ from "lodash";
import React, { useState } from "react";
import DraggableListItem from "./DraggableListItem";

type DraggableListItemType = {
  _id?: string;
  label: string;
  inputType: "text" | "number" | "date" | "file";
  isTextArea: boolean;
  placeHolder: string;
};

type DraggableListProps = {
  data: DraggableListItemType[];
  label: string;
  id: string;
  // eslint-disable-next-line no-unused-vars
  updateChange: (newData: DraggableListItemType[], id: string) => void;
};

const styles = {
  listContainer: {
    listStyle: "none",
  },
};

export const DraggableList = (props: DraggableListProps) => {
  const [data, setData] = useState(props.data);
  const [dragStartIndex, setDragStartIndex] = useState(null);

  const onDragtart = index => setDragStartIndex(index);

  const onDrop = dropIndex => {
    console.log(dragStartIndex, dropIndex);
    const dragItem = data[dragStartIndex];
    const list = [...data];
    list.splice(dragStartIndex, 1);
    if (dragStartIndex < dropIndex) {
      setData([...list.slice(0, dropIndex - 1), dragItem, ...list.slice(dropIndex - 1, list.length)]);
    } else {
      setData([...list.slice(0, dropIndex), dragItem, ...list.slice(dropIndex, list.length)]);
    }
  };
  return (
    <ul style={styles.listContainer}>
      {data.map((item, index) => (
        <DraggableListItem
          key={index}
          index={index}
          onDragStart={ind => onDragtart(ind)}
          onDrop={ind => onDrop(ind)}
          data={data}
          setData={setData}
        />
      ))}
      <DraggableListItem
        data={data}
        setData={setData}
        key={data.length}
        index={data.length}
        draggable={false}
        onDrop={ind => onDrop(ind)}
      />
      <Box>
        <Button
          variant="outlined"
          onClick={() => {
            setData([...data, { label: "", inputType: "text", isTextArea: false, placeHolder: "" }]);
          }}
        >
          Add
        </Button>
        <Button
          sx={{ ml: 2 }}
          variant="contained"
          disabled={_.isEqual(
            data.filter(dt => dt.label !== ""),
            props.data
          )}
          onClick={() => {
            fetch(`https://secure-taiga-55850.herokuapp.com/tickettype/${props.id}`, {
              method: "PATCH",
              headers: {
                "Content-type": "application/json; charset=UTF-8",
              },
              body: JSON.stringify({
                label: props.label,
                inputList: data,
              }),
            }).then(() => {
              props.updateChange(data, props.id);
              console.log("saved");
            });
          }}
        >
          Save
        </Button>
      </Box>
    </ul>
  );
};

export default DraggableList;
