import { PersonsRepositoryMock } from "../../repositories/mocks/PersonsRepositoryMock";
import { PersonsInterfaceRepository } from "../../repositories/PersonsInterfaceRepository";
import { DeletePersonUseCase } from "./DeletePersonUseCase"

let deletePersonUseCase: DeletePersonUseCase
let personsRepositoryMock: PersonsInterfaceRepository

describe("Delete person", () => {
  beforeEach(() => {
    personsRepositoryMock = new PersonsRepositoryMock() as unknown as PersonsInterfaceRepository;
    deletePersonUseCase = new DeletePersonUseCase(personsRepositoryMock);
  })

  it("should call repository with correct infos", async () => {
    await deletePersonUseCase.execute("06650");
    expect(personsRepositoryMock.delete).toBeCalledWith("06650");
  });

  it("should throw if repository throws", async () => {
   personsRepositoryMock.delete = jest.fn().mockImplementationOnce(() => {throw new Error()});
   try {
    await deletePersonUseCase.execute("06650");
   } catch (error) {
    expect(error).toEqual(new Error());
   }
  });
})