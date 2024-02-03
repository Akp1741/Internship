 /*
 import { Inject, Logger,Injectable } from "@nestjs/common";
 import { HttpService } from "@nestjs/axios";
 import { AxiosResponse,AxiosError } from "axios";
 import { App } from "supertest/types";

@Injectable()
 export class Appservice{
    getHello():string{
        return 'Hello!';
    }

    getsomething():string{
        return 'data is sent back';
    }
 }

// import axios from 'axios';

// @Injectable()
// export class Appservice {
//   private readonly logger = new Logger(Appservice.name);

//   constructor(private readonly httpService: HttpService) {}

//   async findAll(): Promise<App[]> {
//     try {
//       const response = await axios.get<App[]>('http://localhost:3000/Apps');
//       return response.data;
//     } catch (error) {
//       if (axios.isAxiosError(error)) {
//         const axiosError = error as AxiosError;
//         if (axiosError.response) {
//           this.logger.error(axiosError.response.data);
//         } else {
//           this.logger.error('Network Error');
//         }
//       } else {
//         this.logger.error('An error occurred');
//       }
//       throw new Error('An error happened!');
//     }
//   }
// }
*/

import { Injectable } from "@nestjs/common";

@Injectable()
export class Appservice{
    getHello():string{
        return 'HelloWorld';
    }
}