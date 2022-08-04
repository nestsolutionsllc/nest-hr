import { Dispatch, SetStateAction } from "react";

export type QuestionType = {
  question: string;
  checked: boolean;
};

export type CheckListType = {
  type: string;
  questions: Array<QuestionType>;
};

export type CheckBoxListProps = {
  mainData: Array<CheckListType>;
  setMainData: Dispatch<SetStateAction<CheckListType[]>>;
  index: number;
};

export type MockType = {
  name: string;
  checklists: Array<CheckListType>;
};

export type InfoType = {
  lastName: string;
  firstName: string;
  departmentName: string;
  position: string;
  email: string;
  salary: string;
  joiningDate: Date;
  userPhoto: string;
};

export type LanguageType = {
  languageName: string;
  levelOfProficiency: string;
  countryPhoto: string;
};
