
// import { Controller, Module } from '@nestjs/common';
// import { UsersController } from './users.controller';
// import { TypeOrmModule } from '@nestjs/typeorm';
// //import { CacheModule } from '@nestjs/cache-manager';
// import { AppController } from './app.controller';



// import { QuizController } from './modules/Quiz.controller';
// import { User } from './Database/entities/User';
// //import { TaskService } from './Task/Task.service';
// //import { TaskModule } from './Task/Task.module';
// import { Cronservices } from './Cron/Cron.services';

// import { scheduled } from 'rxjs';
// import { ScheduleModule } from '@nestjs/schedule';
// import { logService } from './Logger/Log.service';
// import { EventEmitterModule } from '@nestjs/event-emitter';
// import { UserService } from './User.service';
// import multer from 'multer';
// import { MulterModule } from '@nestjs/platform-express';
// import { HttpModule } from '@nestjs/axios';
// import { ConfigModule, ConfigService } from '@nestjs/config';
// // import { typeOrmConfigAsync } from './Config/Typeorm.config';

// @Module({
//     imports:[TypeOrmModule.forRoot({
//        type:"mysql",
//         host:'localhost',
//        port:3306,
//        username: "root",
//        password:"akp@321",
//        database:"intern",
//        entities:[User],
//        synchronize:true
//      }),
//      EventEmitterModule.forRoot(),
//     MulterModule.register({dest:'./uploads'}),
//   HttpModule,
// ConfigModule.forRoot()],
   
//    controllers: [UsersController,AppController],
//   //for Crone
//   //imports:[ScheduleModule.forRoot()],
//   // controllers:[AppController],
//   providers:[Cronservices,logService,UserService]
  
// })
// export class AppModule {}

// /*

// @Module({
//   imports:[AppModule,TypeOrmModule.forRootAsync(typeOrmConfigAsync)],
//   controllers:[],
//   providers:[]
// })


// import { Module } from '@nestjs/common';
// import { TypeOrmModule } from '@nestjs/typeorm';
// import { ConfigModule } from '@nestjs/config';
// import { AppController } from './app.controller';
// // import { AppService } from './app.service';
// import { Appservice } from './modules/app.service';
// // import { User } from './Database/entites';
// import { UserService } from './User.service';
// import { User } from './Database/entities/User';


// @Module({
//   imports: [
//     ConfigModule.forRoot(), // Load environment variables
//     TypeOrmModule.forRoot({
//       type: 'mysql', // or any other DBMS you are using
//       host: process.env.DB_HOST,
//       port: parseInt(process.env.DB_PORT),
//       username: process.env.DB_USERNAME,
//       password: process.env.DB_PASSWORD,
//       database: process.env.DB_NAME,
//       autoLoadEntities: true,
//       synchronize: true // set to false in production
//     })
//   ],
//   controllers: [AppController],
//   providers: [Appservice,],
// })
// export class AppModule {}
// */

import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { Appservice } from "./app.services";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "./Database/entities/User";

@Module({
  imports:[TypeOrmModule.forRoot({
    type:"mysql",
            host:'localhost',
           port:3306,
           username: "root",
           password:"akp@321",
           database:"intern",
           entities:[User],
           synchronize:true
        }),
        TypeOrmModule.forFeature([User])],
  controllers:[AppController],
  providers:[Appservice]
  
})

export class AppModule{}