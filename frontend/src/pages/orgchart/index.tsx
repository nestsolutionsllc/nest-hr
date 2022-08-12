import { NextPage } from "next";
import React, { useEffect, useState } from "react";
import data from "./data";
import OrganizationalChart from "../../components/orgchart/OrganizationalChart";
import { IEmployee } from "../../interfaces/IEmployee";

const OrgChart: NextPage = () => {
  const [employees, setEmployees] = useState<IEmployee[]>([]);

  useEffect(() => {
    setEmployees(data);
  }, []);

  return (
    <div>
      <OrganizationalChart data={employees} />
    </div>
  );
};
export default OrgChart;
