import { Router } from "express"
import { PersonsRepository } from "../persons/repositories/PersonsRepository";
import CreatePersonService from "../persons/services/CreatePersonService";

export const personsRoutes = Router();
const personsRepository = new PersonsRepository()

personsRoutes.post('/person', (request, response) => {
  const { first_name, last_name, cpf, email, gender, age } = request.body;

  const createPersonService = new CreatePersonService(personsRepository);
  createPersonService.execute({ first_name, last_name, cpf, email, gender, age })

  return response.status(201).send();
})

personsRoutes.get('/persons', (request, response) => {
  const allPersons = personsRepository.list()

  return response.status(200).json(allPersons)
})
