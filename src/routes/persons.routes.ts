import { Router } from "express"
import { PersonsRepository } from "../persons/repositories/PersonsRepository";
import { createPersonController } from "../persons/useCases/createPerson";
import { listPersonsController } from "../persons/useCases/listPersons";

export const personsRoutes = Router();
const personsRepository = new PersonsRepository()

personsRoutes.post('/person', (request, response) => {
  return createPersonController.handle(request, response);
})

personsRoutes.get('/persons', (request, response) => {
  return listPersonsController.handle(request, response);
})
