import { AppError } from "../../../errors/AppError"
import { Person } from "../../entities/Person"
import { PersonsRepositoryInMemory } from "../../repositories/in-memory/PersonsRepositoryInMemory"
import { CreatePersonUseCase } from "../createPerson/CreatePersonUseCase"
import { ListPersonsUseCase } from "./ListPersonsUseCase"

let createPersonUseCase: CreatePersonUseCase
let listPersonsUseCase: ListPersonsUseCase
let personsRepositoryInMemory: PersonsRepositoryInMemory

describe("List persons", () => {
  beforeEach(() => {
    personsRepositoryInMemory = new PersonsRepositoryInMemory();
    listPersonsUseCase = new ListPersonsUseCase(personsRepositoryInMemory);
    createPersonUseCase = new CreatePersonUseCase(personsRepositoryInMemory);
  })

  it("should be able to list all persons", async () => {
    const person = {
      first_name: "Jane",
      last_name: "Doe",
      cpf: "12345678901",
      email: "jdoe@crud.br",
      gender: "F",
      age: 33,
    }
    await createPersonUseCase.execute({
      first_name: person.first_name,
      last_name: person.last_name,
      cpf: person.cpf,
      email: person.email,
      gender: person.gender,
      age: person.age
    });

    const allPersons = await listPersonsUseCase.execute();
    console.log(allPersons, "aqui")

    expect(allPersons).toBeInstanceOf(Array)
  });

  it("should not be able to show persons when there is none registered", async () => {
    const allPersons = await listPersonsUseCase.execute();

    expect(allPersons).toStrictEqual([])
  });
})