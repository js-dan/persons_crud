import { Person } from "../entities/Person";

export interface CreatePersonDTO {
  first_name: string;
  last_name: string;
  cpf: string;
  email: string;
  gender?: string;
  age?: number;
}

export interface UpdatePersonDTO {
  first_name?: string,
  last_name?: string,
  cpf: string,
  email?: string,
  gender?: string,
  age?: number,
}

export interface PersonsInterfaceRepository {
  create({ first_name, last_name, cpf, email, gender, age }: CreatePersonDTO): Promise<void>;
  list(): Promise<Person[]>;
  findByCpf(cpf: string): Promise<Person | undefined>;
  update({ first_name, last_name, cpf, email, gender, age }: UpdatePersonDTO): Promise<Person | undefined>;
  delete(cpf: string): Promise<void>
}