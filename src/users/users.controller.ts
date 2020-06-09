import { Controller, Post, Body, Get, Param, Put } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserRequest } from './dto/users-request.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async add(@Body() user: UserRequest) {
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
  async update(@Param('userId') userId: string, @Body() user: UserRequest) {
    return this.usersService.updateUser(userId, user.username, user.password);
  }
}
