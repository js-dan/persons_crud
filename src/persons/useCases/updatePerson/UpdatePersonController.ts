import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdatePersonUseCase } from "./UpdatePersonUseCase";

export class UpdatePersonController {

  async handle(request: Request, response: Response): Promise<Response>{
    const { first_name, last_name, email, gender, age } = request.body;
    const { cpf } = request.headers
    console.log(request.body)
    
    const updatePersonUseCase = container.resolve(UpdatePersonUseCase);
    if(typeof(cpf)=="string"){
      console.log("-------------------------")
      console.log(cpf)
      console.log(first_name)
      console.log(request.body)
      console.log("qqq")
      const person = await updatePersonUseCase.execute({ first_name, last_name, cpf, email, gender, age })
      return response.status(201).json(person);
    }
    return response.status(400).send()
  }
}