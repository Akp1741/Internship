import { Module } from "@nestjs/common";
import {  } from "@nestjs/common/interfaces";
import { AppController } from "./app.controller";
import { Appservice } from "./app.service";

@Module({
    imports:[AppController],
    controllers:[AppController],
    providers:[Appservice],
    
})
    export class AppModule{}