import { PersonsRepository } from "../../repositories/implementations/PersonsRepository";
import { ListPersonsController } from "./ListPersonsController";
import { ListPersonsUseCase } from "./ListPersonsUseCase";


export default () => {
  const personsRepository = new PersonsRepository();
  const listPersonsUseCase = new ListPersonsUseCase(personsRepository);
  
  const listPersonsController = new ListPersonsController(listPersonsUseCase);

  return listPersonsController;
}