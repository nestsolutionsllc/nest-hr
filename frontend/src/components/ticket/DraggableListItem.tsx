/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { Box, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import React, { useRef } from "react";
import DragHandleIcon from "@mui/icons-material/DragHandle";
import CloseIcon from "@mui/icons-material/Close";

type listItemType = {
  _id?: string;
  label: string;
  inputType: "text" | "number" | "date" | "file";
  isTextArea: boolean;
  placeHolder: string;
};
type DraggableListItemType = {
  draggable?: boolean;
  index: number;
  onDragStart?: (index) => void;
  onDrop: (index) => void;
  data?: listItemType[];
  setData?: React.Dispatch<React.SetStateAction<listItemType[]>>;
};

const styles = {
  listItem: {
    padding: "10px",
    border: "1px solid transparent",
    // display: "flex",
    alignItems: "center",
    // justifyContent: "space-between",
    display: "inline-flex",
    "*": {
      pointerEvents: "none",
    },
  },
  listItemInputContainer: {
    margin: "0 10px",
  },
  listItemInput: {
    // margin: "0 10px",
  },
};

const DraggableListItem = (props: DraggableListItemType) => {
  const { data, setData, index } = props;
  const {
    label = "",
    inputType = "text",
    isTextArea = false,
    placeHolder = "",
  } = index === data?.length ? {} : data[index];
  const itemRef = useRef(null);

  const onDragStart = e => {
    // remove default drag ghost
    // e.dataTransfer.effectedAllowed = "hide";
    // e.dataTransfer.setDragImage(e.target, 5000, 5000);

    // custom drag ghost
    const ghostNode = e.target.cloneNode(true);

    ghostNode.style.position = "absolute";

    // show ghost add mouse pointer position
    ghostNode.style.top = `${e.offsetY - e.target.offsetHeight / 2}px`;
    ghostNode.style.left = `${e.offsetX - e.target.offsetWidth / 2}px`;

    // add width height to ghost node
    ghostNode.style.height = `${e.target.offsetHeight}px`;
    ghostNode.style.width = `${e.target.offsetWidth}px`;

    // add some style
    ghostNode.style.opacity = 0.8;
    ghostNode.style.pointerEvents = "none";

    // add id
    ghostNode.id = "ghostNode";

    document.body.prepend(ghostNode);

    // identify selected item
    itemRef.current.style.opacity = 0.5;

    if (props.onDragStart) {
      props.onDragStart(props.index);
    }
  };

  const onDrag = e => {
    // move thost node with mouse
    // eslint-disable-next-line no-undef
    const ghostNode: HTMLElement = document.querySelector("#ghostNode");
    ghostNode.style.top = `${e.offsetY - e.target.offsetHeight / 2}px`;
    ghostNode.style.left = `${e.offsetX - e.target.offsetWidth / 2}px`;
  };

  const onDragEnd = () => {
    document.querySelector("#ghostNode").remove();
    itemRef.current.style.opacity = 1;
  };
  const onDragEnter = () => {
    itemRef.current.style.borderTop = "2px solid #019aff";
  };

  const onDragLeave = () => {
    itemRef.current.style.borderTop = "1px solid transparent";
  };

  // add event for item can drop
  const onDragOver = e => e.preventDefault();

  const onDrop = () => {
    itemRef.current.style.borderTop = "1px solid transparent";
    props.onDrop(props.index);
  };
  const updateData = (updatedData: listItemType) => {
    setData(data.map((item, i) => (i === index ? updatedData : item)));
  };
  return (
    <li
      style={styles.listItem}
      ref={itemRef}
      onDragEnter={onDragEnter}
      onDragLeave={onDragLeave}
      onDragOver={onDragOver}
      onDrop={onDrop}
      draggable={props.draggable !== undefined ? props.draggable : true}
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
      onDrag={onDrag}
    >
      {index < data.length && (
        <>
          <div>
            <DragHandleIcon />
          </div>

          <Box style={styles.listItemInputContainer}>
            <TextField
              label="label"
              value={label}
              sx={[styles.listItemInput, { width: "200px" }]}
              onChange={e => {
                updateData({
                  ...data[index],
                  label: e.target.value,
                });
              }}
            />
          </Box>
          <Box style={styles.listItemInputContainer}>
            <FormControl>
              <InputLabel id="demo-simple-select-label">Input Type</InputLabel>
              <Select
                sx={[styles.listItemInput, { width: "120px" }]}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={inputType}
                label="inputType"
                onChange={e => {
                  updateData({
                    ...data[index],
                    inputType: e.target.value as "text" | "number" | "date" | "file",
                  });
                }}
              >
                <MenuItem value={"number"}>Number</MenuItem>
                <MenuItem value={"text"}>Text</MenuItem>
                <MenuItem value={"date"}>Date</MenuItem>
                <MenuItem value={"file"}>File</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box style={styles.listItemInputContainer}>
            <FormControl>
              <InputLabel id="isTextArea">Is Text Area</InputLabel>
              <Select
                disabled={inputType !== "text"}
                sx={[styles.listItemInput, { width: "120px" }]}
                labelId="isTextArea"
                value={isTextArea ? "true" : "false"}
                label="isTextArea"
                onChange={e => {
                  updateData({
                    ...data[index],
                    isTextArea: e.target.value === "true",
                  });
                }}
              >
                <MenuItem value={"true"}>True</MenuItem>
                <MenuItem value={"false"}>False</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box style={styles.listItemInputContainer}>
            <TextField
              sx={[styles.listItemInput, { width: "180px" }]}
              label="Placeholder Text"
              value={placeHolder}
              onChange={e => {
                updateData({
                  ...data[index],
                  placeHolder: e.target.value,
                });
              }}
            />
          </Box>
          <CloseIcon
            sx={{ cursor: "pointer" }}
            onClick={() => {
              setData(data.filter((_, i) => i !== index));
            }}
          />
        </>
      )}
    </li>
  );
};

export default DraggableListItem;
