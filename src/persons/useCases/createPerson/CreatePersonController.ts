import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreatePersonUseCase } from "./CreatePersonUseCase";

export class CreatePersonController {

  async handle(request: Request, response: Response): Promise<Response>{
    const { first_name, last_name, cpf, email, gender, age } = request.body;

    const createPersonUseCase = container.resolve(CreatePersonUseCase);
    await createPersonUseCase.execute({ first_name, last_name, cpf, email, gender, age })

    return response.status(201).send();
  }
}
