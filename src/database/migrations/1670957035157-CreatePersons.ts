import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreatePersons1670957035157 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "persons",
            columns: [
                { name: "first_name", type: "varchar" },
                { name: "last_name", type: "varchar" },
                { name: "cpf", type: "varchar", isPrimary: true },
                { name: "email", type: "varchar" },
                { name: "gender", type: "varchar" },
                { name: "age", type: "float" },
                { name: "created_at", type: "timestamp", default: "now()" },
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("persons")
    }

}
