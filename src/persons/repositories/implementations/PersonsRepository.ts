import { getRepository, Repository } from "typeorm";
import { Person } from "../../entities/Person";
import { CreatePersonDTO, PersonsInterfaceRepository, UpdatePersonDTO } from "../PersonsInterfaceRepository";

export class PersonsRepository implements PersonsInterfaceRepository {
  private repository: Repository<Person>;

  constructor() {
    this.repository = getRepository(Person);
  }

  async create({ first_name, last_name, cpf, email, gender, age }: CreatePersonDTO): Promise<void> {

    const person = this.repository.create({
      first_name, last_name, cpf, email, gender, age
    })
  
    await this.repository.save(person)
  } 

  async list(): Promise<Person[]> {
    const persons = await this.repository.find();
    return persons;
  }

  async findByCpf(cpf: string): Promise<Person | undefined> {
    const person = await this.repository.findOne({ cpf });

    return person;
  }

  async delete(cpf: string): Promise<void> {
      await this.repository.delete({cpf})
  }

  async update({ first_name, last_name, cpf, email, gender, age }: UpdatePersonDTO): Promise<Person | undefined> {
    const person = await this.repository.findOne({ cpf });
    if (person) {
      person.first_name = first_name ? first_name : person.first_name
      person.last_name = last_name ? last_name : person.last_name
      person.email = email ? email : person.email
      person.gender = gender ? gender : person.gender
      person.age = age ? age : person.age
      await this.repository.save(person)
    }
    return person
  }
}