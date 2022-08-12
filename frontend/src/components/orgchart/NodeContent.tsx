import React from "react";
import { IEmployee } from "../../interfaces/IEmployee";
import SubContent from "./SubContent";

const NodeContent = (props: { data: IEmployee; _children: [{ data: IEmployee }] }) => {
  return (
    <div>
      <SubContent data={props.data} />
    </div>
  );
};

export default NodeContent;
