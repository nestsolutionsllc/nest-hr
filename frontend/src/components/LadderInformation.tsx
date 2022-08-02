import { FC, useState } from "react";
import { Button, Typography, Box } from "@mui/material";
import { Ladder, Information, levelsType } from "./Ladder";

const styles = {
  barTop: {
    display: "flex",
    flexDirection: "row",
    borderBottom: "1px solid black",
    justifyContent: "space-between",
  },
  contentContainer: {
    display: "flex",
    flexDirection: "column",
    overflowY: "scroll",
    verticalAlign: "center",
  },
  infoContainer: {
    width: "45%",
  },
  levelContainer: {
    width: "45%",
    minWidth: "400px",
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
  const [descriptionContent, setDescriptionContent] = useState<descriptionType | levelsType>("Technology");
  return (
    <Box sx={type === "level" ? styles.levelContainer : styles.infoContainer}>
      <Box sx={styles.barTop}>
        {infoKeys[type].map(el => (
          <Button
            onClick={() => (type === "description" ? setDescriptionContent(el) : setLevelContent(el))}
            variant={"text"}
          >
            {el}
          </Button>
        ))}
      </Box>
      <Box sx={styles.contentContainer}>
        {type === "level" && <Ladder label={levelContent} width={"100%"} />}
        {type === "description" &&
          Information[descriptionContent].map((el, ind) => (
            <Box marginTop={"20px"}>
              <Typography variant={"h5"}>{`${ind + 1}. ${el[0]}`}</Typography>
              {type === "description" && (
                <Typography marginLeft={"10px"} marginTop={"10px"} variant={"subtitle1"}>{` • ${el[1]}`}</Typography>
              )}
            </Box>
          ))}
      </Box>
    </Box>
  );
};

export default LadderInformation;
