import { Length, IsNotEmpty } from 'class-validator';

export class CreateQuizdto{
    @IsNotEmpty({ message:'Quiz should have a title'})
    @Length(3,255)

    title:string;

    @IsNotEmpty()
    @Length(3)
    description:string;
}