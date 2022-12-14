import { Request, Response } from "express";
import { CreatePersonUseCase } from "./CreatePersonUseCase";

export class CreatePersonController {
  constructor(private createPersonUseCase: CreatePersonUseCase) {}

  handle(request: Request, response: Response): Response{
    const { first_name, last_name, cpf, email, gender, age } = request.body;

    this.createPersonUseCase.execute({ first_name, last_name, cpf, email, gender, age })

    return response.status(201).send();
  }
}