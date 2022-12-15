import { Router } from "express"
import { CreatePersonController } from "../persons/useCases/createPerson/CreatePersonController";
import { DeletePersonController } from "../persons/useCases/deletePerson/DeletePersonController";
import { FindPersonsController } from "../persons/useCases/findPerson/FindPersonController";
import { ListPersonsController } from "../persons/useCases/listPersons/ListPersonsController";

export const personsRoutes = Router();

const createPersonController = new CreatePersonController()
const listPersonsController = new ListPersonsController()
const findPersonController = new FindPersonsController()
const deletePersonController = new DeletePersonController()

personsRoutes.post('/person', createPersonController.handle);

personsRoutes.get('/persons', listPersonsController.handle);

personsRoutes.get('/person', findPersonController.handle);

personsRoutes.delete('/person', deletePersonController.handle);

