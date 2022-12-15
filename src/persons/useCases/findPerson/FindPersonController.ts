import { Request, Response } from "express";
import { container } from "tsyringe";
import { FindPersonsUseCase } from "./FindPersonUseCase";

export class FindPersonsController {

  async handle(request: Request, response: Response): Promise<Response> {
    const { cpf } = request.headers
    const findPersonsUseCase = container.resolve(FindPersonsUseCase)
    if(typeof(cpf)=="string"){
      const allPersons = await findPersonsUseCase.execute(cpf)
      return response.status(200).json(allPersons)
    }
    return response.status(400).send()
  }
}