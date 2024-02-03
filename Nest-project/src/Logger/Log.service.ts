import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class logService {
  private readonly logger = new Logger(logService.name);

  someMethod() {
    this.logger.log('This is a log message.');
    this.logger.warn('This is a warning message.');
    this.logger.error('This is an error message.');
  }
}
