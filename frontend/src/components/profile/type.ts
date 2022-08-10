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
  languageName?: string;
  levelOfProficiency?: string;
  countryPhoto?: string;
};

export type AchievementListType = {
  category: string;
  data: Array<AchievementItemType>;
};

export type SalaryTableType = [
  {
    name: string;
    position: string;
    salary: number;
    workdays: number;
    workedDays: number;
    raise: number;
    calculatedSalary: number;
    socialInsurance: number;
    PIT: number;
    prePayment: number;
    otherDeduction: number;
    totalDeduction: number;
    salaryAtHand: number;
  }
];

export type SalaryTableHeaderType = Array<string>;
