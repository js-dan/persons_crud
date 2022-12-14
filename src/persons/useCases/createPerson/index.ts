import { PersonsRepository } from "../../repositories/PersonsRepository";
import { CreatePersonController } from "./CreatePersonController";
import { CreatePersonUseCase } from "./CreatePersonUseCase";

const personsRepository = new PersonsRepository();
const createPersonUseCase = new CreatePersonUseCase(personsRepository);

export const createPersonController = new CreatePersonController(createPersonUseCase);