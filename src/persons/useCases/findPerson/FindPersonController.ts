import { Request, Response } from "express";
import { container } from "tsyringe";
import { FindPersonUseCase } from "./FindPersonUseCase";

export class FindPersonsController {

  async handle(request: Request, response: Response): Promise<Response> {
    const { cpf } = request.headers
    const findPersonUseCase = container.resolve(FindPersonUseCase)
    if(typeof(cpf)=="string"){
      const person = await findPersonUseCase.execute(cpf)
      return response.status(200).json(person)
    }
    return response.status(400).send()
  }
}