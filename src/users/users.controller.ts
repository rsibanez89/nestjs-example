import { Controller, Post, Body, Get, Param, Put } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserRequest } from './dto/users-request.dto';
import { UserRequestSchema } from './dto/users-request.validation';
import { RequestValidationPipe } from 'src/common/request-validation.pipe';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async add(@Body(new RequestValidationPipe(UserRequestSchema)) user: UserRequest) {
    return this.usersService.addUser(user.username, user.password);
  }

  @Get()
  async getAll() {
    return this.usersService.getUsers();
  }

  @Get(':userId')
  async get(@Param('userId') userId: string) {
    return this.usersService.getUserById(userId);
  }

  @Put(':userId')
  async update(@Param('userId') userId: string, @Body(new RequestValidationPipe(UserRequestSchema)) user: UserRequest) {
    return this.usersService.updateUser(userId, user.username, user.password);
  }
}
