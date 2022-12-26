import { Person } from "../../entities/Person";

const p1 = new Person();
const p2 = new Person();
p1.cpf = "12345";
p2.cpf = "67890";

const PersonsRepositoryMock = jest.fn(() => ({
  create: jest.fn().mockImplementation((): Promise<void> => {
    return Promise.resolve();
  }),
  list: jest.fn().mockImplementation((): Promise<Person[]> => {
    return Promise.resolve([p1, p2]);
  }),
  findByCpf: jest.fn().mockImplementation((): Promise<Person | undefined> => {
    return Promise.resolve(p1);
  }),
  update: jest.fn().mockImplementation((): Promise<Person | undefined> => {
    return Promise.resolve(p2);
  }),
  delete: jest.fn().mockImplementation((): Promise<void> => {
    return Promise.resolve();
  })
}));

export { PersonsRepositoryMock };