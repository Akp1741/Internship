import { Injectable } from "@nestjs/common";

@Injectable()
 export class Appservice{
    getHello():string{
        return 'Hello!';
    }

    getsomething():string{
        return 'data is sent back';
    }
 }