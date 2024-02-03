import { Injectable, } from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';

@Injectable()
export class UserService {
  constructor(private eventEmitter: EventEmitter2) {}

  createUser(username: string) {
    console.log(`User ${username} created`);
    
    this.eventEmitter.emit('userCreated', username);
  }
}
