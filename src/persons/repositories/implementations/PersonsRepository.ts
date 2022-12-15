import { getRepository, Repository } from "typeorm";
import { Person } from "../../entities/Person";
import { CreatePersonDTO, PersonsInterfaceRepository } from "../PersonsInterfaceRepository";

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
}