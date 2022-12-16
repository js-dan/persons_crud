import { Router } from "express"
import { CreatePersonController } from "../persons/useCases/createPerson/CreatePersonController";
import { DeletePersonController } from "../persons/useCases/deletePerson/DeletePersonController";
import { FindPersonsController } from "../persons/useCases/findPerson/FindPersonController";
import { ListPersonsController } from "../persons/useCases/listPersons/ListPersonsController";
import { UpdatePersonController } from "../persons/useCases/updatePerson/UpdatePersonController";

export const personsRoutes = Router();

const createPersonController = new CreatePersonController()
const listPersonsController = new ListPersonsController()
const findPersonController = new FindPersonsController()
const updatePersonController = new UpdatePersonController()
const deletePersonController = new DeletePersonController()

personsRoutes.post('/person', createPersonController.handle);

personsRoutes.get('/persons', listPersonsController.handle);

personsRoutes.get('/person', findPersonController.handle);

personsRoutes.put('/person', updatePersonController.handle);

personsRoutes.delete('/person', deletePersonController.handle);

