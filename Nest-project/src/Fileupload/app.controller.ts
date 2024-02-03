
import { Controller ,Get,Post,Req, UploadedFile, UseInterceptors} from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";

@Controller()
export class AppController{
  @Get()
  async getTest(@Req() request){
    console.log(request.cookies);
    return 'Hello';
  }

 @Post('/file')
 @UseInterceptors(FileInterceptor('file'))
 handleupload(@UploadedFile() file: Express.Multer.File){
  console.log('file',file);
  return 'File upload API';
 }
}