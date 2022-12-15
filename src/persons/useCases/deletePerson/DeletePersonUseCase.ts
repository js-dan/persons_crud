import { inject, injectable } from "tsyringe";
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
      throw new Error("Person not exists.");
    }
    await this.personsRepository.delete(cpf)
  }
}