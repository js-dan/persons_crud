import { Router } from "express"
import { PersonsRepository } from "../persons/repositories/PersonsRepository";
import { createPersonController } from "../persons/useCases/createPerson";

export const personsRoutes = Router();
const personsRepository = new PersonsRepository()

personsRoutes.post('/person', (request, response) => {
  return createPersonController.handle(request, response)
})

personsRoutes.get('/persons', (request, response) => {
  const allPersons = personsRepository.list()

  return response.status(200).json(allPersons)
})
