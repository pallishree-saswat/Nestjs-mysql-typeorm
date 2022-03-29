import { Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post('add')
  addUser(): object {
    return {
      msg: 'data added ',
    };
  }

  @Get('/get')
  async getUsers(): Promise<any> {
    return this.userService.find();
  }
}
