"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CreatePersonService {
    execute({ first_name, last_name, CPF, email, gender, age }) {
        console.log(first_name, CPF);
    }
}
exports.default = new CreatePersonService();
