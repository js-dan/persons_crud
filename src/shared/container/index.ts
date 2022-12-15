import { container } from "tsyringe";
import { PersonsRepository } from "../../persons/repositories/implementations/PersonsRepository";
import { PersonsInterfaceRepository } from "../../persons/repositories/PersonsInterfaceRepository";

container.registerSingleton<PersonsInterfaceRepository>("PersonsRepository", PersonsRepository)