import { Dispatch, SetStateAction } from "react";

export type OkrDataType = {
  title: string;
  krList: {
    kr: string;
    comments: string[];
  }[];
};
export type PropsType = {
  title: string;
  setOkrData: Dispatch<SetStateAction<OkrDataType[]>>;
  okrData: OkrDataType[];
  ind: number;
};
export type StateType = {
  expanded: string;
  addResult: boolean;
  anchorEl: string;
  newTitle: string;
  anchorElement: string;
  percent: 0;
  value: string;
  type: string;
  index: number;
  newResult: string;
};
