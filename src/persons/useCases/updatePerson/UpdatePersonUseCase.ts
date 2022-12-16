import { inject, injectable } from "tsyringe";
import { AppError } from "../../../errors/AppError";
import { Person } from "../../entities/Person";
import { PersonsInterfaceRepository, UpdatePersonDTO } from "../../repositories/PersonsInterfaceRepository";

@injectable()
export class UpdatePersonUseCase {
  constructor(
    @inject("PersonsRepository")
    private personsRepository: PersonsInterfaceRepository
  ) {}

  async execute( { first_name, last_name, cpf, email, gender, age }: UpdatePersonDTO): Promise<Person |void> {
    const personAlreadyExists = await this.personsRepository.findByCpf(cpf);
    if (personAlreadyExists) {
      const person = await this.personsRepository.update({ first_name, last_name, cpf, email, gender, age })
      return person
    }
    throw new AppError("Person not exists.", 404);
  }
}
