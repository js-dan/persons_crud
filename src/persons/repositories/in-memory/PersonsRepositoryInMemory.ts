import { Person } from "../../entities/Person";
import { CreatePersonDTO, PersonsInterfaceRepository, UpdatePersonDTO } from "../PersonsInterfaceRepository";

export class PersonsRepositoryInMemory implements PersonsInterfaceRepository {

  persons: Person[] = [];

  async create({ first_name, last_name, cpf, email, gender, age }: CreatePersonDTO): Promise<void> {
    const person = new Person()

    Object.assign(person, {
      first_name,
      last_name,
      cpf,
      email,
      gender,
      age,
    });
    this.persons.push(person);
  }

  async list(): Promise<Person[]> {
    const allPersons = this.persons;
    return allPersons;
  }

  async findByCpf(cpf: string): Promise<Person | undefined> {
    const person = this.persons.find((person) => person.cpf === cpf);
    return person;
  }

  async update({ first_name, last_name, cpf, email, gender, age }: UpdatePersonDTO): Promise<Person | undefined> {
    const personIndex = this.persons.findIndex((person) => person.cpf === cpf);
    if (personIndex) {
      this.persons[personIndex].first_name = first_name ? first_name : this.persons[personIndex].first_name
      this.persons[personIndex].last_name = last_name ? last_name : this.persons[personIndex].last_name
      this.persons[personIndex].email = email ? email : this.persons[personIndex].email
      this.persons[personIndex].gender = gender ? gender : this.persons[personIndex].gender
      this.persons[personIndex].age = age ? age : this.persons[personIndex].age
    }
    return this.persons[personIndex]
  }

  async delete(cpf: string): Promise<void> {
    const personIndex = this.persons.findIndex((person) => person.cpf === cpf);
    if (personIndex) {
    this.persons.splice(personIndex, 1)
    }
  }
}