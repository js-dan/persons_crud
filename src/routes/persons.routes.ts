import { Router } from "express"
import { PersonsRepository } from "../repositories/PersonsRepository";
import CreatePersonService from "../services/CreatePersonService";

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

// function verifyIfExistsPerson(request, response, next) {
//   const { cpf } = request.headers;
//   const person = persons.find((person) => person.cpf === cpf);

//   if (!person) {
//     return response.status(400).json({ error: "Person not found." });
//   }

//   request.person = person;

//   return next();
// }

// function alreadyCreatedPerson(request, response, next) {
//   const { cpf } = request.headers;
//   const personAlreadyExists = persons.some((person) => person.cpf === cpf);

//   if (personAlreadyExists) {
//     return response.status(400).json({ error: "Person already exists." });
//   }

//   return next();
// }
