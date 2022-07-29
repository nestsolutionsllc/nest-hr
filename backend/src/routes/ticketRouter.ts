import express from "express";
import {
  getAllTicketsService,
  getTicketsService,
  createTicketService,
  deleteTicketService,
  updateTicketService,
} from "../controller/ticket/ticketControllers";

const ticketRouter = express.Router();

ticketRouter.get("/tickets", getAllTicketsService);
ticketRouter.get("/ticket/:id", getTicketsService);
ticketRouter.patch("/ticket/:id", updateTicketService);
ticketRouter.post("/ticket", createTicketService);
ticketRouter.delete("/ticket", deleteTicketService);

export default ticketRouter;
