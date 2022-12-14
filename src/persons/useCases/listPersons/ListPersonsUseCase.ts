import { Person } from "../../entities/Person";
import { PersonInterfaceRepository } from "../../repositories/PersonInterfaceRepository";

export class ListPersonsUseCase {
  constructor(private personsRepository: PersonInterfaceRepository) {}

  execute(): Promise<Person[]> {
    const persons = this.personsRepository.list();
    return persons;
  }
}