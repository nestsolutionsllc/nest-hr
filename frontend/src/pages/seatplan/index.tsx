import { NextPage } from "next";
import SeatPlan from "../../components/seatplan/SeatPlan";
import { employees, seats } from "./data";

const SeatPlanner: NextPage = () => {
  return (
    <SeatPlan empData={employees} bgPath="/assets/images/plan.jpg" seatData={seats} size={{ rows: 15, cols: 20 }} />
  );
};
export default SeatPlanner;
