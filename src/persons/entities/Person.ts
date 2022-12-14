import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm"

@Entity("categories")

export class Person {
  @Column()
  first_name: string;
  
  @Column()
  last_name: string;
  
  @PrimaryColumn()
  cpf: string;
  
  @Column()
  email: string;
  
  @Column()
  gender?: string;
  
  @Column()
  age?: number;

  @CreateDateColumn()
  created_at?: Date;
  
  constructor() {
    this.first_name = '';
    this.last_name = '';
    this.cpf = '';
    this.email = '';
  }
}