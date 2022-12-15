import { inject, injectable } from "tsyringe";
import { Person } from "../../entities/Person";
import { PersonsInterfaceRepository } from "../../repositories/PersonsInterfaceRepository";

@injectable()
export class ListPersonsUseCase {
  constructor(
    @inject("PersonsRepository")
    private personsRepository: PersonsInterfaceRepository
  ) {}

  async execute(): Promise<Person[]> {
    const persons = await this.personsRepository.list();
    return persons;
  }
}