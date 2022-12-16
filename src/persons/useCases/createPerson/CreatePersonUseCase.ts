import { inject, injectable } from "tsyringe";
import { AppError } from "../../../errors/AppError";
import { CreatePersonDTO, PersonsInterfaceRepository } from "../../repositories/PersonsInterfaceRepository";

@injectable()
export class CreatePersonUseCase {
  constructor(
    @inject("PersonsRepository")
    private personsRepository: PersonsInterfaceRepository
  ) {}

  async execute( { first_name, last_name, cpf, email, gender, age }: CreatePersonDTO): Promise<void> {
    const personAlreadyExists = this.personsRepository.findByCpf(cpf);
    if (await personAlreadyExists) {
      throw new AppError("Person already exists.", 201);
    }
    this.personsRepository.create({ first_name, last_name, cpf, email, gender, age })
  }
}
