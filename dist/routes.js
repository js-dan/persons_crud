"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPerson = void 0;
const CreatePersonService_1 = __importDefault(require("./CreatePersonService"));
function createPerson(request, response) {
    CreatePersonService_1.default.execute({
        first_name: 'Jane',
        last_name: 'Doe',
        CPF: '040829364',
        email: 'jdoe@crud.br',
        gender: 'M',
        age: 73
    });
    return response.send();
}
exports.createPerson = createPerson;
