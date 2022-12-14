import { PersonsRepository } from "../../repositories/implementations/PersonsRepository";
import { CreatePersonController } from "./CreatePersonController";
import { CreatePersonUseCase } from "./CreatePersonUseCase";

export default (): CreatePersonController => {
  const personsRepository = new PersonsRepository();
  const createPersonUseCase = new CreatePersonUseCase(personsRepository);
  
  const createPersonController = new CreatePersonController(createPersonUseCase);
  
  return createPersonController;
}
