// import { Injectable } from '@nestjs/common'
// import { MigrationInterface, QueryRunner, Table } from 'typeorm'
// import uuid = require('uuid')

// @Injectable()
// export class InitUserTable1551883596067 implements MigrationInterface {

//   public async up(queryRunner: QueryRunner): Promise<any> {
//     await queryRunner.createTable(new Table({
//       name: 'conatiner',
//       columns: [
//         {
//             name: 'id',
//             type: 'varchar',
//             isPrimary: true,
//             generationStrategy: 'uuid',
//             default: 'uuid_generate_v4()',
//         }
//       ]
//     }), true)
//   }

//   public async down(queryRunner: QueryRunner): Promise<any> {
//     await queryRunner.dropTable('container', true)
//   }

// }