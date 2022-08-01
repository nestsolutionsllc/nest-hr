import type { NextPage } from "next";
import MainLayout from "../layouts/MainLayout";
import Ladder from "../components/Ladder";

const HomePage: NextPage = () => {
  return (
    <MainLayout>
      <Ladder width={"50%"} />
    </MainLayout>
  );
};

export default HomePage;
