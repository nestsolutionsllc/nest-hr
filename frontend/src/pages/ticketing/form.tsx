import React, { useEffect, useState } from "react";
import _ from "lodash";
import { Box } from "@mui/material";
import { DraggableList } from "../../components/ticket/DraggableList";

type DraggableListItemType = {
  _id: string;
  label: string;
  inputType: "text" | "number" | "date" | "file";
  isTextArea: boolean;
  placeHolder: string;
};

type RequestType = {
  _id: string;
  label: string;
  inputList: DraggableListItemType[];
};

export const FormPage = () => {
  const [requestTypes, setRequestTypes] = useState<RequestType[]>([]);
  useEffect(() => {
    fetch("https://secure-taiga-55850.herokuapp.com/tickettypes", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(res => res.json())
      .then(data => {
        setRequestTypes(data);
      });
  }, []);
  const [selectedTab, setSelectedTab] = useState(0);

  const updateChange = (newData, id) => {
    setRequestTypes(
      requestTypes.map(reqType => {
        if (reqType._id === id) {
          return { ...reqType, inputList: newData };
        }
        return reqType;
      })
    );
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
      }}
    >
      <Box
        sx={{
          minWidth: "200px",
        }}
      >
        {_.isArray(requestTypes) &&
          requestTypes?.map((requestType, index) => (
            <Box
              key={index}
              onClick={() => setSelectedTab(index)}
              sx={{
                backgroundColor: selectedTab === index ? "primary.main" : "white",
                color: selectedTab === index ? "white" : "primary.main",
                padding: "10px",
                borderRadius: "5px",
                cursor: "pointer",
                margin: "10px",
              }}
            >
              {requestType.label}
            </Box>
          ))}
      </Box>
      <Box>
        {_.isArray(requestTypes) &&
          requestTypes?.map((requestType, index) => (
            <Box
              key={index}
              sx={{
                display: selectedTab === index ? "block" : "none",
              }}
            >
              <DraggableList
                data={requestType.inputList}
                label={requestTypes[selectedTab].label}
                id={requestTypes[selectedTab]._id}
                updateChange={updateChange}
              />
            </Box>
          ))}
      </Box>
    </Box>
  );
};

export default FormPage;
