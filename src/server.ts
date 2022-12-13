import express from "express";
import { personsRoutes } from "./routes/persons.routes";
import "./database"

const app = express();
app.use(express.json());
app.use(personsRoutes);

app.listen(3333, () => console.log("🚀 Server ready at http://localhost:3333"));

// const persons: Person[] = [];

// interface Person {
//   first_name: string;
//   last_name: string;
//   cpf: string;
//   email: string;
//   gender?: string;
//   age?: number;
// }

// function verifyIfExistsPerson(request, response, next) {
//   const { cpf } = request.headers;
//   const person = persons.find((person) => person.cpf === cpf);

//   if (!person) {
//     return response.status(400).json({ error: "Person not found." });
//   }

//   request.person = person;

//   return next();
// }

// app.get("/persons", (request, response) => response.status(200).json(persons));

// app.use(verifyIfExistsPerson)

// app.get("/person", verifyIfExistsPerson, (request, response) => {
//   const { person } = request;

//   return response.status(200).json(person);
// });

// app.put("/person", verifyIfExistsPerson, (request, response) => {
//   const { first_name, last_name, email, gender, age } = request.body;

//   const { person } = request;
//   person.first_name = first_name || person.first_name;
//   person.last_name = last_name || person.last_name;
//   person.email = email || person.email;
//   person.gender = gender || person.gender;
//   person.age = age || person.age;

//   return response.status(201).send();
// });

// app.delete("/person", verifyIfExistsPerson, (request, response) => {
//   const { person } = request;

//   persons.splice(person, 1);

//   return response.status(204).send();
// });
