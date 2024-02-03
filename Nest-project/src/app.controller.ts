
/*
//  import { Controller, Get} from "@nestjs/common";


// @Controller()
// export class AppController{
    

//     @Get()
//         async getHello(){
//         return this.getHello();
//     }
// }


 /* //coustom Deco
import { Controller, Post, Body } from '@nestjs/common';
import { UpperCase } from './CustomDecorator';

@Controller('example')
export class AppController {
  @Post('uppercase')
  postUpperCase(@Body('value') @UpperCase() value: string): string {
    return value;
  }
}
//

import { ClassSerializerInterceptor, Controller,Get, UseInterceptors } from "@nestjs/common";
import { User } from "./Database/entities/User";
import { Role } from "./Database/entities/role";

@Controller()
export class AppController{
consructor(){}

@UseInterceptors(ClassSerializerInterceptor)
@Get()
getuser():User{
  const user=new User({ 
    id:1,
    firstName:'Ayush',
    lastName:'Patel',
    email:'ayush@gmail.com',
    birthday:new Date("1998-12-10"),
    password:'password',
    role:new Role({id:'1',name:'admin'}),
  })
  return user
}
}

*/

import { BadRequestException, Body, Controller, Get, Post } from "@nestjs/common";
import { Appservice } from "./app.services";
import * as bcrypt from 'bcrypt';

@Controller('/user')
export class AppController{
  constructor(private readonly appservice:Appservice){}

@Post('/register')
 async register(
  @Body('name') name:string,
  @Body('email') email:string,
  @Body('password') password:string,
  @Body('createdAt') createdAt: Date,
  @Body('authStrategy') authStrategy: string
  )
  {

    const hashedPassword=await bcrypt.hash(password,12)
    return this.appservice.create({
      name,
      email,
      password:hashedPassword,
      createdAt, 
      authStrategy,
    });
}
@Post('/login')
async login(
 @Body('email') email:string,
 @Body('password')password:string,
){
 const user =await this.appservice.findone({email});
 if (!user){
  throw new BadRequestException('invalid credentials');
 }
}


}