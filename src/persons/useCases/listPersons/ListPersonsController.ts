import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListPersonsUseCase } from "./ListPersonsUseCase";

export class ListPersonsController {

  async handle(request: Request, response: Response): Promise<Response> {
    const listPersonsUseCase = container.resolve(ListPersonsUseCase)
    const allPersons = await listPersonsUseCase.execute()

    return response.status(200).json(allPersons)
  }
}