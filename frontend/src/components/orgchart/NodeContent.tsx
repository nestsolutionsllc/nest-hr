import React from "react";
import { IEmployee } from "../../interfaces/IEmployee";
import SubContent from "./SubContent";

const NodeContent = (props: { data: IEmployee; _children: [{ data: IEmployee }] }) => {
  return <SubContent data={props.data} />;
};

export default NodeContent;
