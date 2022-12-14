import { Person } from "../entities/Person";

export interface CreatePersonDTO {
  first_name: string;
  last_name: string;
  cpf: string;
  email: string;
  gender?: string;
  age?: number;
}

export interface PersonInterfaceRepository {
  findByCpf(cpf: string): Promise<Person | undefined>;
  list(): Promise<Person[]>;
  create({ first_name, last_name, cpf, email, gender, age }: CreatePersonDTO): Promise<void>;
}