import { Request, Response } from "express";
import {
  getOnboardCheckList,
  getOnboardCheckLists,
  addOnboardCheckList,
  deleteOnboardCheckList,
  updateOnboardCheckList,
} from "../../../queries/profile/onboarding/onBoardCheckListService";

export const getOnboardCheckListsService = async (request: Request, response: Response) => {
  try {
    response.send(await getOnboardCheckLists());
  } catch (error) {
    /* istanbul ignore next */
    response.status(500).send(error);
  }
};

export const getOnboardCheckListService = async (request: Request, response: Response) => {
  try {
    const result = await getOnboardCheckList(request);
    response.status(200).send(result);
  } catch (error) {
    /* istanbul ignore next */
    response.status(500).send(error);
  }
};

export const updateOnboardCheckListService = async (request: Request, response: Response) => {
  try {
    const result = await updateOnboardCheckList(request);
    response.status(200).send(result);
  } catch (error) {
    /* istanbul ignore next */
    response.status(500).send(error);
  }
};

export const createOnboardCheckListService = async (request: Request, response: Response) => {
  try {
    const result = await addOnboardCheckList(request);
    response.status(201).send(result);
  } catch (error) {
    /* istanbul ignore next */
    response.status(400).send(error);
  }
};

export const deleteOnboardCheckListService = async (request: Request, response: Response) => {
  try {
    await deleteOnboardCheckList(request);
    response.status(200).send({
      message: "Deleted successfully",
    });
  } catch (error) {
    /* istanbul ignore next */
    response.status(500).send(error);
  }
};
