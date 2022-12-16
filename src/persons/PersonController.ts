import { Request, Response } from "express";
import { container } from "tsyringe";
import {
  CreatePersonUseCase,
  DeletePersonUseCase,
  FindPersonUseCase,
  ListPersonsUseCase,
  UpdatePersonUseCase
} from "./useCases";

export class CreatePersonController {
  async handle(request: Request, response: Response): Promise<Response>{
    const { first_name, last_name, cpf, email, gender, age } = request.body;

    const createPersonUseCase = container.resolve(CreatePersonUseCase);
    await createPersonUseCase.execute({ first_name, last_name, cpf, email, gender, age })

    return response.status(201).send();
  }
}

export class ListPersonsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listPersonsUseCase = container.resolve(ListPersonsUseCase)
    const allPersons = await listPersonsUseCase.execute()

    return response.status(200).json(allPersons)
  }
}

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

export class UpdatePersonController {
  async handle(request: Request, response: Response): Promise<Response>{
    const { first_name, last_name, email, gender, age } = request.body;
    const { cpf } = request.headers
    
    const updatePersonUseCase = container.resolve(UpdatePersonUseCase);
    if(typeof(cpf)=="string"){
      const person = await updatePersonUseCase.execute({ first_name, last_name, cpf, email, gender, age })
      return response.status(201).json(person);
    }
    return response.status(400).send()
  }
}

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
