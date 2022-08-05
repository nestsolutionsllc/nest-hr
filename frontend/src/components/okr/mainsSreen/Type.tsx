import { Dispatch, SetStateAction } from "react";

export type dataType = {
  name: string;
  child: string[];
};
export type PropsType = {
  title: string;
  setData: Dispatch<SetStateAction<unknown>>;
  data: dataType[];
  ind: number;
};
export type ColType = {
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
