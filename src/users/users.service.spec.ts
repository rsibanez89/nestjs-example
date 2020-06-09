import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';

describe('UsersService', () => {
  let service: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersService],
    }).compile();

    service = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return all user when call getUsers', async () => {
    // Given
    const users = [
      {
        userId: '1',
        username: 'rod',
        password: 'rod',
      },
      {
        userId: '2',
        username: 'john',
        password: 'john',
      },
    ];

    // When
    const result = await service.getUsers();

    // Then
    expect(result).toEqual(users);
  });

  it('should return user when call getUser', async () => {
    // Given
    const user = {
      userId: '2',
      username: 'john',
      password: 'john',
    };

    // When
    const result = await service.getUser(user.username);

    // Then
    expect(result).toEqual(user);
  });

  it('should return user when call getUserById', async () => {
    // Given
    const user = {
      userId: '2',
      username: 'john',
      password: 'john',
    };

    // When
    const result = await service.getUserById(user.userId);

    // Then
    expect(result).toEqual(user);
  });

  it('should add user when call addUser', async () => {
    // Given
    const user = {
      userId: '3',
      username: 'hadi',
      password: 'hadi',
    };

    // When
    const result = await service.addUser(user.username, user.password);

    // Then
    expect(result).toEqual(user);
  });

  it('should update user when call addUser', async () => {
    // Given
    const user = {
      userId: '2',
      username: 'sandeep',
      password: 'sandeep',
    };

    // When
    const result = await service.updateUser(user.userId, user.username, user.password);

    // Then
    expect(result).toEqual(user);
  });
});
