import { PersonInterfaceRepository } from "../repositories/PersonInterfaceRepository";

interface PersonRequest {
  first_name: string,
  last_name: string,
  cpf: string,
  email: string,
  gender?: string,
  age?: number,
}

class CreatePersonService {
  constructor(private personsRepository: PersonInterfaceRepository) {}

  execute( { first_name, last_name, cpf, email, gender = 'undefined', age }: PersonRequest): void {
    const personAlreadyExists = this.personsRepository.findByCpf(cpf);
    if (personAlreadyExists) {
      throw new Error("Person already exists.");
    }
    this.personsRepository.create({ first_name, last_name, cpf, email, gender, age })
  }
}

export default CreatePersonService;