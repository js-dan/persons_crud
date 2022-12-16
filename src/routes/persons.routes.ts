import { Router } from "express"
import { 
  CreatePersonController, 
  DeletePersonController, 
  FindPersonsController, 
  ListPersonsController, 
  UpdatePersonController 
} from "../persons/PersonController";

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

