import { Injectable,Logger } from "@nestjs/common";
import { Cron,CronExpression } from "@nestjs/schedule";

@Injectable()
export class Cronservices{
    constructor(){}
    @Cron('* * * * * *')
    handleCron(){
        console.log(new Date())
    }
}