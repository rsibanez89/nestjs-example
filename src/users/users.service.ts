import { Injectable } from '@nestjs/common';
import { User } from './dto/users.dto';

@Injectable()
export class UsersService {
  private readonly users: User[];

  constructor() {
    this.users = [
      {
        userId: "1",
        username: 'rod',
        password: 'rod',
      },
      {
        userId: "2",
        username: 'john',
        password: 'john',
      },
    ];
  }

  async getUsers(): Promise<User[]> {
    return this.users;
  }

  async getUser(username: string): Promise<User | undefined> {
    return this.users.find(user => user.username === username);
  }

  async getUserById(userId: string): Promise<User | undefined> {
    return this.users.find(user => user.userId === userId);
  }

  async addUser(username: string, password: string): Promise<User> {
    const user: User = {
      userId: (this.users.length + 1).toString(),
      username: username,
      password: password,
    };
    this.users.push(user);
    return user;
  }

  async updateUser(userId: string, username: string, password: string): Promise<User> {
    const user = await this.getUserById(userId);
    user.username = username;
    user.password = password;
    return user;
  }
}
