import { AppError } from "../../../errors/AppError"
import { PersonsRepositoryInMemory } from "../../repositories/in-memory/PersonsRepositoryInMemory"
import { CreatePersonUseCase } from "./CreatePersonUseCase"

let createPersonUseCase: CreatePersonUseCase
let personsRepositoryInMemory: PersonsRepositoryInMemory

describe("Create person", () => {
  beforeEach(() => {
    personsRepositoryInMemory = new PersonsRepositoryInMemory();
    createPersonUseCase = new CreatePersonUseCase(personsRepositoryInMemory);
  })

  it("should be able to create a new person", async () => {
    const person = {
      first_name: "Janesa",
      last_name: "Doeew",
      cpf: "06650",
      email: "jdoe@crud.br",
      gender: "IM",
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

    const personCreated = await personsRepositoryInMemory.findByCpf(person.cpf);

    expect(personCreated).toHaveProperty("cpf");
  });

  it("should not be able to create a new person with the repeated cpf", async () => {
    expect(async () => {
      const person = {
        first_name: "Janesa",
        last_name: "Doeew",
        cpf: "06650",
        email: "jdoe@crud.br",
        gender: "IM",
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
      await createPersonUseCase.execute({
        first_name: person.first_name,
        last_name: person.last_name,
        cpf: person.cpf,
        email: person.email,
        gender: person.gender,
        age: person.age
      });
    }).rejects.toBeInstanceOf(AppError);
  });
})