import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Container } from './container/container.entity';
import { ContainerModule } from './container/container.module';

@Module({
  imports: [ContainerModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password:'postgres',
      database: 'task-management',
      entities: [Container],
      autoLoadEntities:true,
      synchronize:true,
    }),
  ],
  
})
export class AppModule {}
