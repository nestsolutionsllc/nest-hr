import { Box, FormGroup, FormControlLabel, Checkbox } from "@mui/material";
import { FC, useState, useEffect } from "react";
import { CheckBoxListProps, QuestionType, CheckListType } from "../type";

const styles = {
  container: {
    marginTop: 2,
    boxShadow: "0 2px 8px 0 rgb(5 34 97 / 10%)",
    borderRadius: 4,
    paddingLeft: 4,
    paddingTop: 2,
    paddingBottom: 2,
  },
  title: {
    fontWeight: "bold",
    fontSize: 32,
  },
};

export const CheckBoxList: FC<CheckBoxListProps> = ({ mainData, setMainData, index }) => {
  const currentCheckList = mainData[index];
  const title = currentCheckList.type;
  const nestedQuestions = currentCheckList.questions;
  const [allCompleted, setAllCompleted] = useState(false);

  useEffect(() => {
    setAllCompleted(true);

    currentCheckList.questions.map(question => {
      if (!question.checked) setAllCompleted(false);
      return question;
    });
  }, [currentCheckList]);

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
      <Box
        sx={[
          styles.title,
          { textDecoration: allCompleted ? "line-through" : "none", opacity: allCompleted ? "0.5" : "1" },
        ]}
      >
        {title}
      </Box>
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
