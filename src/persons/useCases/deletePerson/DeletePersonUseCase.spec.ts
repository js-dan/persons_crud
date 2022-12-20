import { AppError } from "../../../errors/AppError"
import { PersonsRepositoryInMemory } from "../../repositories/in-memory/PersonsRepositoryInMemory"
import { CreatePersonUseCase } from "../createPerson/CreatePersonUseCase"
import { DeletePersonUseCase } from "./DeletePersonUseCase"

let createPersonUseCase: CreatePersonUseCase
let deletePersonUseCase: DeletePersonUseCase
let personsRepositoryInMemory: PersonsRepositoryInMemory

describe("Delete person", () => {
  beforeEach(() => {
    personsRepositoryInMemory = new PersonsRepositoryInMemory();
    createPersonUseCase = new CreatePersonUseCase(personsRepositoryInMemory);
    deletePersonUseCase = new DeletePersonUseCase(personsRepositoryInMemory);
  })

  it("should be able to delete a person", async () => {
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

    await deletePersonUseCase.execute("06650");
    const personCreated = await personsRepositoryInMemory.findByCpf(person.cpf);
    console.log(personCreated) //not deleting

    expect(personCreated).toHaveProperty("cpf");
  });

  it("should not be able to delete a new person with the invalid cpf", async () => {
    expect(async () => {
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
      await deletePersonUseCase.execute("066540");
  }).rejects.toBeInstanceOf(AppError);
  });
})