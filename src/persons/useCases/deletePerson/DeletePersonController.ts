import { Request, Response } from "express";
import { container } from "tsyringe";
import { DeletePersonUseCase } from "./DeletePersonUseCase";

export class DeletePersonController {

  async handle(request: Request, response: Response): Promise<Response>{
    const { cpf } = request.headers;
    
    const deletePersonUseCase = container.resolve(DeletePersonUseCase);
    if(typeof(cpf)=="string"){
      await deletePersonUseCase.execute(cpf)
      return response.status(200).send();
    }
    return response.status(400).send()
  }
}