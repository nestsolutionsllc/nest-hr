import { Box, FormGroup, FormControlLabel, Checkbox } from "@mui/material";
import { FC } from "react";
import { CheckBoxListProps, QuestionType, CheckListType } from "./types";

const styles = {
  container: {
    marginTop: 4,
  },
  title: {
    fontWeight: "bold",
    fontSize: 32,
    marginBottom: 2,
  },
};

export const CheckBoxList: FC<CheckBoxListProps> = ({ mainData, setMainData, index }) => {
  const currentCheckList = mainData[index];
  const title = currentCheckList.type;
  const nestedQuestions = currentCheckList.questions;
  const updateCheckList = (checkedIndex: number) => {
    const newCheckListQuestions: QuestionType[] = currentCheckList.questions.map((nestedQuestion, i) => {
      if (i === checkedIndex) {
        return {
          question: nestedQuestion.question,
          checked: !nestedQuestion.checked,
        };
      }
      return nestedQuestion;
    });

    const newMainData: CheckListType[] = mainData.map((checklist, i) => {
      if (i === index) {
        return {
          type: checklist.type,
          questions: newCheckListQuestions,
        };
      }
      return checklist;
    });
    setMainData(newMainData);
  };

  return (
    <Box sx={styles.container}>
      <Box sx={styles.title}>{title}</Box>
      <FormGroup>
        {nestedQuestions.map((nestedQuestion, questionIndex) => {
          const { checked } = nestedQuestion;
          return (
            <FormControlLabel
              key={`${index}-${questionIndex}`}
              sx={{ opacity: checked ? "0.5" : "1" }}
              control={<Checkbox checked={checked} />}
              label={<Box sx={{ textDecoration: checked ? "line-through" : "none" }}> {nestedQuestion.question} </Box>}
              onChange={() => updateCheckList(questionIndex)}
            />
          );
        })}
      </FormGroup>
    </Box>
  );
};

export default CheckBoxList;
