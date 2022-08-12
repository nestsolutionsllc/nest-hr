import { NextPage } from "next";
import SeatPlan from "../../components/seatplan/SeatPlan";
import { employees, seats } from "./data";

const SeatPlanner: NextPage = () => {
  return <SeatPlan empData={employees} seatData={seats} />;
};
export default SeatPlanner;
