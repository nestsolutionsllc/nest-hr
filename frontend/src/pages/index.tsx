import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useCallback } from "react";
import { Button } from "@mui/material";
import Link from "next/link";
import MainLayout from "../layouts/MainLayout";
import CardComp from "../components/userprofile/CreditCard";

const HomePage: NextPage = () => {
  const router = useRouter();
  const submit = useCallback(async () => {
    router.push("/");
  }, []);

  return (
    <MainLayout>
      <div className="container">
        <div className="profile">
          <Link href="/salaryInfo">
            <Button type="submit" onSubmit={submit}>
              Salary info
            </Button>
          </Link>
          <CardComp />
        </div>
      </div>
    </MainLayout>
  );
};

export default HomePage;
