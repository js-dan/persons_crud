import { Request, Response } from "express";
import { ListPersonsUseCase } from "./ListPersonsUseCase";

export class ListPersonsController {
  constructor(private listPersonsUseCase: ListPersonsUseCase) {}

  handle(request: Request, response: Response): Response {
    const allPersons = this.listPersonsUseCase.execute()

    return response.status(200).json(allPersons)
  }
}