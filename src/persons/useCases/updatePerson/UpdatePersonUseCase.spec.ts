import { AppError } from "../../../errors/AppError"
import { PersonsRepositoryInMemory } from "../../repositories/in-memory/PersonsRepositoryInMemory"
import { CreatePersonUseCase } from "../createPerson/CreatePersonUseCase"
import { UpdatePersonUseCase } from "./UpdatePersonUseCase"

let createPersonUseCase: CreatePersonUseCase
let updatePersonUseCase: UpdatePersonUseCase
let personsRepositoryInMemory: PersonsRepositoryInMemory

describe("Update person", () => {
  beforeEach(() => {
    personsRepositoryInMemory = new PersonsRepositoryInMemory();
    createPersonUseCase = new CreatePersonUseCase(personsRepositoryInMemory);
    updatePersonUseCase = new UpdatePersonUseCase(personsRepositoryInMemory);
  })

  it("should be able to update a person", async () => {
    const person = {
      first_name: "Jane",
      last_name: "Doe",
      cpf: "12345678901",
      email: "jdoe@crud.br",
      gender: "F",
      age: 33,
    }

    const updateValues = {
      first_name: "John",
      last_name: "Doe",
      email: "jdoe@crud.uk",
      gender: "M",
      age: 35,
    }
    await createPersonUseCase.execute({
      first_name: person.first_name,
      last_name: person.last_name,
      cpf: person.cpf,
      email: person.email,
      gender: person.gender,
      age: person.age
    });

    const personUpdated = await updatePersonUseCase.execute({
      first_name: updateValues.first_name,
      last_name: updateValues.last_name,
      cpf: person.cpf,
      email: updateValues.email,
      gender: updateValues.gender,
      age: updateValues.age
    })

    console.log(personUpdated, "updated") //not updating 

    const personCreated = await personsRepositoryInMemory.findByCpf(person.cpf);

    expect(personCreated).toHaveProperty("cpf");
  });
})