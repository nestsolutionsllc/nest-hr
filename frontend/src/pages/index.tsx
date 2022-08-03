import type { NextPage } from "next";
import { Container } from "@mui/material";
import { LanguageCard } from "../components/userprofile/LanguageCard";

const HomePage: NextPage = () => {
  return (
    <Container>
      <LanguageCard />
    </Container>
  );
};

export default HomePage;
