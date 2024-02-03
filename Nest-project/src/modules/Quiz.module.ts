import { Module } from "@nestjs/common";
import { QuizController } from "./Quiz.controller";
import { Quizservice } from "./Quiz.service";

@Module({
    imports:[Quizservice],
    controllers:[QuizController],
    providers:[Quizservice]
})
export class Quizmodule{}