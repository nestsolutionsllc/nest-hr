import { Dispatch, SetStateAction } from "react";

export type EmployeeDetailType = {
  modal: boolean;
  setModal: Dispatch<SetStateAction<boolean>>;
  data: Array<EmployeeDataType>;
};

export type EmployeeDataType = {
  name: string;
  phone: string;
  email: string;
  role: string;
  birthday: Date;
};
