import { Injectable, Post } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "./Database/entities/User";
import { Repository } from "typeorm";

@Injectable()
export class Appservice{
 constructor(
    @InjectRepository(User) private useRepository:Repository<User>
 ){}
    async create(data:any):Promise<User>{
        return this.useRepository.save(data);
    }
 
    async findone(condition:any):Promise<User>{
    return this.useRepository.findOne(condition);
 }
}