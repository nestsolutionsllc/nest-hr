import express from "express";
import {
  getSalariesService,
  getSalaryService,
  createSalaryService,
  deleteSalaryService,
  updateSalaryService,
} from "../controller/salaryControllers";

const salaryRouter = express.Router();

salaryRouter.get("/salaries", getSalariesService);
salaryRouter.get("/salary/:id", getSalaryService);
salaryRouter.patch("/salary/:id", updateSalaryService);
salaryRouter.post("/salary", createSalaryService);
salaryRouter.delete("/salary", deleteSalaryService);

export default salaryRouter;
