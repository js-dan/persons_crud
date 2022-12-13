import { Person } from "../model/Person";
import { CreatePersonDTO, PersonInterfaceRepository } from "./PersonInterfaceRepository";

export class PersonsRepository implements PersonInterfaceRepository {
  private persons: Person[] = [];

  constructor() {
    this.persons = [];
  }

  create({ first_name, last_name, cpf, email, gender, age }: CreatePersonDTO): void {

    const person = new Person();
    Object.assign(person,{
      first_name,
      last_name,
      cpf,
      email,
      gender,
      age,
    })
  
    this.persons.push(person);
  } 

  list(): Person[] {
    return this.persons;
  }

  findByCpf(cpf: string): Person | undefined {
    const person = this.persons.find((person) => person.cpf === cpf);

    return person;
  }
}