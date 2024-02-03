import { Injectable } from "@nestjs/common";

@Injectable()
export class Quizservice{
    getAllQuiz(){
    return [1,2,3];
}
}