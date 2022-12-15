import { Router } from "express"
import { CreatePersonController } from "../persons/useCases/createPerson/CreatePersonController";
import { ListPersonsController } from "../persons/useCases/listPersons/ListPersonsController";

export const personsRoutes = Router();

const createPersonController = new CreatePersonController()
const listPersonsController = new ListPersonsController()

personsRoutes.post('/person', createPersonController.handle);

personsRoutes.get('/persons', listPersonsController.handle);
