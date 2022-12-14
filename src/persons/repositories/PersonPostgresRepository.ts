import { Person } from "../entities/Person";
import { CreatePersonDTO, PersonInterfaceRepository } from "./PersonInterfaceRepository";

export class PersonPostgresRepository implements PersonInterfaceRepository {
  
  private persons: Person[] = [];
  constructor() { this.persons = [] };

  create({ first_name, last_name, cpf, email, gender, age }: CreatePersonDTO): void {
    console.log(first_name)
    throw new Error("Method not implemented.");
  }
  list(): Person[] {
    return this.persons;
  }
  findByCpf(cpf: string): Person | undefined {
    console.log(cpf)
    throw new Error("Method not implemented.");
  }
}