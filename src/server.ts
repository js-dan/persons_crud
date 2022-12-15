import "reflect-metadata"
import express from "express";
import "./database"
import "./shared/container"
import { personsRoutes } from "./routes/persons.routes";

const app = express();
app.use(express.json());
app.use(personsRoutes);

app.listen(3333, () => console.log("🚀 Server ready at http://localhost:3333"));
