export class Person {
  first_name: string;
  last_name: string;
  cpf: string;
  email: string;
  gender?: string;
  age?: number;
  
  constructor() {
    this.first_name = '';
    this.last_name = '';
    this.cpf = '';
    this.email = '';
  }
}