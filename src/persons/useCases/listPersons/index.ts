import { PersonsRepository } from "../../repositories/PersonsRepository";
import { ListPersonsController } from "./ListPersonsController";
import { ListPersonsUseCase } from "./ListPersonsUseCase";

const personsRepository = new PersonsRepository();
const listPersonsUseCase = new ListPersonsUseCase(personsRepository);

export const listPersonsController = new ListPersonsController(listPersonsUseCase);