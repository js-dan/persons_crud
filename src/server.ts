import "reflect-metadata"
import express, { NextFunction, Request, Response } from "express";
import "express-async-errors"
import "./database"
import "./shared/container"
import { personsRoutes } from "./routes/persons.routes";
import { AppError } from "./errors/AppError";

const app = express();
app.use(express.json());
app.use(personsRoutes);

app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
  if(err instanceof AppError) {
    return response.status(err.statusCode).json({
      message: err.message
    })
  }
  return response.status(500).json({
    status: "error",
    message: `Internal server error - ${err.message}`
  })
})

app.listen(3333, () => console.log("🚀 Server ready at http://localhost:3333"));
