import { Person } from "../../entities/Person";
import { PersonInterfaceRepository } from "../../repositories/PersonInterfaceRepository";

export class ListPersonsUseCase {
  constructor(private personsRepository: PersonInterfaceRepository) {}

  async execute(): Promise<Person[]> {
    const persons = await this.personsRepository.list();
    return persons;
  }
}