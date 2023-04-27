import { MigrationInterface, QueryRunner } from "typeorm";

export class MovieMigrations1682453373644 implements MigrationInterface {
    name = 'MovieMigrations1682453373644'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "movies" ALTER COLUMN "description" DROP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "movies" ALTER COLUMN "description" SET NOT NULL`);
    }

}
