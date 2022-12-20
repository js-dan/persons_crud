import { AppError } from "../../../errors/AppError"
import { PersonsRepositoryInMemory } from "../../repositories/in-memory/PersonsRepositoryInMemory"
import { CreatePersonUseCase } from "../createPerson/CreatePersonUseCase"
import { FindPersonUseCase } from "./FindPersonUseCase"

let createPersonUseCase: CreatePersonUseCase
let findPersonUseCase: FindPersonUseCase
let personsRepositoryInMemory: PersonsRepositoryInMemory

describe("Read person", () => {
  beforeEach(() => {
    personsRepositoryInMemory = new PersonsRepositoryInMemory();
    createPersonUseCase = new CreatePersonUseCase(personsRepositoryInMemory);
    findPersonUseCase = new FindPersonUseCase(personsRepositoryInMemory);
  })

  it("should be able to show a registered person", async () => {
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

    const personCreated = await findPersonUseCase.execute(person.cpf)
    expect(personCreated).toHaveProperty("cpf");
  });

  it("should not be able to show a person not registered", async () => {
    expect(async () => {
      await findPersonUseCase.execute("54")
    }).rejects.toBeInstanceOf(AppError);
  });
})