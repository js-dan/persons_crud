import { inject, injectable } from "tsyringe";
import { AppError } from "../../../errors/AppError";
import { Person } from "../../entities/Person";
import { PersonsInterfaceRepository } from "../../repositories/PersonsInterfaceRepository";

@injectable()
export class FindPersonsUseCase {
  constructor(
    @inject("PersonsRepository")
    private personsRepository: PersonsInterfaceRepository
  ) {}

  async execute(cpf: string): Promise<Person|undefined> {
    const person = await this.personsRepository.findByCpf(cpf);
    if(person){
      const person = await this.personsRepository.findByCpf(cpf);
      return person;
    }
    throw new AppError("Person not exists.", 404);
  }
}