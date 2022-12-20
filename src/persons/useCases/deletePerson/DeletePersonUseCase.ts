import { inject, injectable } from "tsyringe";
import { AppError } from "../../../errors/AppError";
import { Person } from "../../entities/Person";
import { PersonsInterfaceRepository } from "../../repositories/PersonsInterfaceRepository";

@injectable()
export class DeletePersonUseCase {
  constructor(
    @inject("PersonsRepository")
    private personsRepository: PersonsInterfaceRepository
  ) {}

  async execute(cpf: string): Promise<void> {
    const personAlreadyExists = await this.personsRepository.findByCpf(cpf);
    if(!personAlreadyExists){
      throw new AppError("Person not exists.", 404);
    }
    await this.personsRepository.delete(cpf)
  }
}