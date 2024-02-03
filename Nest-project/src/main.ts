import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {TypeOrmModule} from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import * as cookieParser from 'cookie-parser';
//import { UserService } from './User.service';
import * as compression from 'compression';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(cookieParser());
  await app.listen(3000);
  // const userService = app.get(UserService);

  // userService.createUser('Ayush');
  app.use(compression()); 

}


bootstrap();
