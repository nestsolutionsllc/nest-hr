import type { NextPage } from "next";
import MainLayout from "../layouts/MainLayout";
import Ladder from "../components/Ladder";

const HomePage: NextPage = () => {
  return (
    <MainLayout>
      <div>
        <Ladder height={"80vh"} width={"80vh"} />
      </div>
    </MainLayout>
  );
};

export default HomePage;
