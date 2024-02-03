import { Body, Controller,Get, HttpCode, Post, UsePipes, ValidationPipe } from "@nestjs/common";
import {Quizservice} from './Quiz.service';
import { CreateQuizdto } from "./dto/CreateQuiz.dto";

@Controller('Quiz')
export class QuizController{
    constructor(private quizservice:Quizservice){}
    @Get('/')
    getallQuiz(){
        return this.quizservice.getAllQuiz();
    }

    @Post('/create')
    @HttpCode(200)
    @UsePipes(ValidationPipe)
    createQuiz(@Body() quizData:CreateQuizdto){
    return {data:quizData};
    }
}

