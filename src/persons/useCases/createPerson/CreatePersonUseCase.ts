import { PersonInterfaceRepository } from "../../repositories/PersonInterfaceRepository";

interface PersonRequest {
  first_name: string,
  last_name: string,
  cpf: string,
  email: string,
  gender?: string,
  age?: number,
}

export class CreatePersonUseCase {
  constructor(private personsRepository: PersonInterfaceRepository) {}

  async execute( { first_name, last_name, cpf, email, gender = 'undefined', age }: PersonRequest): Promise<void> {
    const personAlreadyExists = this.personsRepository.findByCpf(cpf);
    if (await personAlreadyExists) {
      throw new Error("Person already exists.");
    }
    this.personsRepository.create({ first_name, last_name, cpf, email, gender, age })
  }
}
