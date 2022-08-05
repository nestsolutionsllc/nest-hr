import { NextPage } from "next";
import employees from "./data";
import OrganizationalChart from "../../components/orgchart/OrganizationalChart";

const OrgChart: NextPage = () => {
  return <OrganizationalChart data={employees} />;
};
export default OrgChart;
