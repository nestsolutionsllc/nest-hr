import { Request } from "express";
import Ticket from "../../models/ticket/ticket";

export const getAllTickets = () => {
  return Ticket.find({});
};

export const getTickets = (request: Request) => {
  return Ticket.find({ assignee_id: request.params.id });
};

export const updateTicket = async (request: Request) => {
  return Ticket.findByIdAndUpdate(request.params.id, request.body, {
    new: true,
  });
};

export const addTicket = (request: Request) => {
  return new Ticket(request.body).save();
};

export const deleteTicket = (request: Request) => {
  return Ticket.findByIdAndDelete(request.body._id);
};
