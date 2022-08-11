import { Request, Response } from "express";
import {
  getAllTicket,
  getTicket,
  getTickets,
  addTicket,
  deleteTicket,
  updateTicket,
} from "../../queries/ticket/ticketService";

export const getAllTicketsService = async (request: Request, response: Response) => {
  response.send(await getAllTicket());
};

export const getTicketService = async (request: Request, response: Response) => {
  try {
    const result = await getTicket(request);
    response.status(200).send(result);
  } catch (error) {
    response.status(500).send(error);
  }
};

export const getTicketsService = async (request: Request, response: Response) => {
  try {
    const result = await getTickets(request);
    response.status(200).send(result);
  } catch (error) {
    /* istanbul ignore next */
    response.status(500).send(error);
  }
};

export const updateTicketService = async (request: Request, response: Response) => {
  try {
    const result = await updateTicket(request);
    response.status(200).send(result);
  } catch (error) {
    /* istanbul ignore next */
    response.status(500).send(error);
  }
};

export const createTicketService = async (request: Request, response: Response) => {
  try {
    const result = await addTicket(request);
    response.status(201).send(result);
  } catch (error) {
    /* istanbul ignore next */
    response.status(400).send(error);
  }
};

export const deleteTicketService = async (request: Request, response: Response) => {
  try {
    await deleteTicket(request);
    response.status(200).send({
      message: "Deleted successfully",
    });
  } catch (error) {
    /* istanbul ignore next */
    response.status(500).send(error);
  }
};
