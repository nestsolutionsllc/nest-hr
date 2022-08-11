import { FC, useState } from "react";
import { Button, Typography, Box } from "@mui/material";
import Ladder from "./Ladder";
import { Information, levelsType } from "./LadderData";
import MockData from "../mockData.json";

const styles = {
  barTop: {
    display: "flex",
    flexDirection: "row",
    borderBottom: "1px solid black",
    justifyContent: "space-between",
    width: "calc(100% - 10px)",
    overflowX: "scroll",
  },
  contentContainer: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
  },
  graphContainer: {
    width: "100%",
  },
  contentTextContainer: {
    display: "flex",
    flexDirection: "column",
    overflowY: "scroll",
    verticalAlign: "center",
    width: "100%",
  },
  container: {
    width: "100%",
    backgroundColor: "white",
    borderRadius: "20px",
    padding: "10px",
    marginBottom: "50px",
    alignSelf: "flex-start",
  },
  margintop: {
    marginTop: "20px",
  },
  marginLeft: {
    marginLeft: "10px",
  },
};

type descriptionType = "Technology" | "System" | "People" | "Process" | "Influence" | levelsType;

type infoKeysType = {
  description: descriptionType[];
  level: levelsType[];
};

const infoKeys: infoKeysType = {
  description: ["Technology", "System", "People", "Process", "Influence"],
  level: ["Current", "d1", "d2", "d3", "d4", "d5", "d6", "d7"],
};

const LadderInformation: FC<{ type: "description" | "level" }> = ({ type }) => {
  const [levelContent, setLevelContent] = useState<levelsType>("Current");
  const [descriptionContent, setDescriptionContent] = useState<descriptionType | levelsType>(
    type === "level" ? "Current" : "Technology"
  );

  // console.log(ladderData);

  return (
    <Box sx={styles.container}>
      <Box sx={styles.barTop}>
        {infoKeys[type].map(el => (
          <Button
            sx={styles.marginLeft}
            onClick={() => {
              setDescriptionContent(el);
              if (type === "level") setLevelContent(el);
            }}
            variant={"text"}
          >
            {el}
          </Button>
        ))}
      </Box>
      <Box sx={styles.contentContainer}>
        {type === "level" && (
          <Box sx={styles.graphContainer}>
            <Ladder label={levelContent} />
          </Box>
        )}
        <Box sx={styles.contentTextContainer}>
          {MockData.ladderData[descriptionContent].map(el => (
            <Box sx={styles.margintop}>
              <Typography variant={"h5"}>{`${el[0]} ${
                type === "level" ? `- ${Information[el[0]][el[1] - 1][0]}` : ""
              }`}</Typography>
              {type === "description" ? (
                <Typography
                  sx={[styles.margintop, styles.marginLeft]}
                  variant={"subtitle1"}
                >{` • ${el[1]}`}</Typography>
              ) : (
                <Typography sx={[styles.margintop, styles.marginLeft]} variant={"subtitle1"}>
                  {` • ${MockData.ladderData[el[0]][el[1] - 1][1]}`}
                </Typography>
              )}
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default LadderInformation;
