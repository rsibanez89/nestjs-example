import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { UserRequest } from './dto/users-request.dto';

describe('Users Controller', () => {
  let controller: UsersController;
  let usersService: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [UsersService],
    }).compile();

    controller = module.get<UsersController>(UsersController);
    usersService = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should call usersService.addUser when add', async () => {
    // Given
    const userRequest: UserRequest = {
      username: 'rod',
      password: 'rod',
    };
    const addUserSpy = jest.spyOn(usersService, 'addUser').mockImplementation();

    // When
    await controller.add(userRequest);

    // Then
    expect(addUserSpy).toHaveBeenCalledWith(
      userRequest.username,
      userRequest.password,
    );
  });

  it('should call usersService.getUsers when getAll', async () => {
    // Given
    const getUsersSpy = jest
      .spyOn(usersService, 'getUsers')
      .mockImplementation();

    // When
    await controller.getAll();

    // Then
    expect(getUsersSpy).toHaveBeenCalled();
  });

  it('should call usersService.getUserById when get', async () => {
    // Given
    const getgetUserByIdSpy = jest
      .spyOn(usersService, 'getUserById')
      .mockImplementation();

    // When
    await controller.get('1');

    // Then
    expect(getgetUserByIdSpy).toHaveBeenCalledWith('1');
  });

  it('should call usersService.updateUser when update', async () => {
    // Given
    const userRequest: UserRequest = {
      username: 'rod',
      password: 'rod',
    };
    const updateUserSpy = jest
      .spyOn(usersService, 'updateUser')
      .mockImplementation();

    // When
    await controller.update('1', userRequest);

    // Then
    expect(updateUserSpy).toHaveBeenCalledWith(
      '1',
      userRequest.username,
      userRequest.password,
    );
  });
});
