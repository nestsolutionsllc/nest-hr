import { Request, Response } from "express";
import {
  getOffboardCheckList,
  getOffboardCheckLists,
  addOffboardCheckList,
  deleteOffboardCheckList,
  updateOffboardCheckList,
} from "../../../queries/profile/offboarding/offBoardCheckListService";

export const getOffboardCheckListsService = async (request: Request, response: Response) => {
  try {
    response.send(await getOffboardCheckLists());
  } catch (error) {
    /* istanbul ignore next */
    response.status(500).send(error);
  }
};

export const getOffboardCheckListService = async (request: Request, response: Response) => {
  try {
    const result = await getOffboardCheckList(request);
    response.status(200).send(result);
  } catch (error) {
    /* istanbul ignore next */
    response.status(500).send(error);
  }
};

export const updateOffboardCheckListService = async (request: Request, response: Response) => {
  try {
    const result = await updateOffboardCheckList(request);
    response.status(200).send(result);
  } catch (error) {
    /* istanbul ignore next */
    response.status(500).send(error);
  }
};

export const createOffboardCheckListService = async (request: Request, response: Response) => {
  try {
    const result = await addOffboardCheckList(request);
    response.status(201).send(result);
  } catch (error) {
    /* istanbul ignore next */
    response.status(400).send(error);
  }
};

export const deleteOffboardCheckListService = async (request: Request, response: Response) => {
  try {
    await deleteOffboardCheckList(request);
    response.status(200).send({
      message: "Deleted successfully",
    });
  } catch (error) {
    /* istanbul ignore next */
    response.status(500).send(error);
  }
};
