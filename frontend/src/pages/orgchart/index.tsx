import { NextPage } from "next";
import React, { useEffect, useState } from "react";
import data from "./data";
import OrganizationalChart from "../../components/orgchart/OrganizationalChart";
import { IEmployee } from "../../interfaces/IEmployee";

const OrgChart: NextPage = () => {
  const [employees, setEmployees] = useState<IEmployee[]>([]);

  useEffect(() => {
    console.log(data);
    console.log("data");
    console.log("hello");
    console.log("test");
    setEmployees(data);
  }, []);

  return <OrganizationalChart data={employees} />;
};
export default OrgChart;
