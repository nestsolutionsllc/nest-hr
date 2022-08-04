import { Dispatch, SetStateAction } from "react";

export type InfoType = {
  lastName: string;
  firstName: string;
  departmentName: string;
  position: string;
  email: string;
  salary: string;
  phoneNumber: string;
  joiningDate: Date;
  userPhoto: string;
};

<<<<<<< HEAD
=======
export type LanguageItemType = {
  languageName: string;
  levelOfProficiency: string;
  countryPhoto: string;
};

export type SkillItemType = {
  title: string;
  rating: number;
};

export type CertificateItemType = {
  companyName: string;
  title: string;
  date: string;
};

export type AwardItemType = {
  date: string;
  title: string;
  description: string;
};

>>>>>>> eee297e (refactor: rebased)
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

export type CheckListMockType = {
  name: string;
  checklists: Array<CheckListType>;
};

export type SalaryDetailType = {
  name: string;
  total: string;
};

export type ChartType = {
  salaryDetail: Array<SalaryDetailType>;
};

export type AchievementItemType = {
  title?: string;
  rating?: number;
  companyName?: string;
  date?: string;
  description?: string;
};

export type AchievementListType = {
  category: string;
  data: Array<AchievementItemType>;
};
