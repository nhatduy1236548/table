import { MiddlewareConsumer, Module, NestModule, RequestMethod, ValidationPipe } from '@nestjs/common';
import { APP_PIPE } from '@nestjs/core';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContainerController } from './container.controller';
import { Container } from './container.entity';
import { ContainerRepository } from './container.repository';
import { ContainerService } from './container.service';


@Module({
  imports: [
    TypeOrmModule.forFeature([
      Container
    ]),
  ],
  controllers: [ContainerController],
  providers: [ContainerService ,ContainerRepository,
    {
      provide: APP_PIPE,
      useValue: new ValidationPipe({
        whitelist: true,
      }),
    },]
})
export class ContainerModule{
}
