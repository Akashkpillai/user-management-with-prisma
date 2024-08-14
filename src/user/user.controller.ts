import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from '@prisma/client';
import { LoginDto } from './dto/login-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  /**
   * Creates a new user.
   * 
   * @param {CreateUserDto} createUserDto - The data for creating a new user.
   * @returns {Promise<User>} The created user object.
   */
  @Post('/create')
  create(@Body() createUserDto: CreateUserDto):Promise<User> {
    return this.userService.create(createUserDto);
  }
   /**
   *user login.
   * 
   * @param {LoginDto} LoginDto - The data for login.
   * @returns { Promise<{access_token:string}>} A message indicating the jwt is made.
   */
  @Post('/login')
  async login(@Body() loginUserDto: LoginDto): Promise<{ access_token: string }> {
    return await this.userService.login(loginUserDto);
  }

  /**
   * Retrieves all users.
   * 
   * @returns {Promise<User[]>} A list of all users.
   */
  @Get()
  findAll() {
    return this.userService.findAll();
  }

  /**
   * Retrieves a single user by ID.
   * 
   * @param {string} id - The ID of the user to retrieve.
   * @returns {Promise<User>} The user object with the specified ID.
   */
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }

  /**
   * Updates a user's details.
   * 
   * @param {string} id - The ID of the user to update.
   * @param {UpdateUserDto} updateUserDto - The new data for updating the user.
   * @returns {Promise<User>} The updated user object.
   */
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  /**
   * Removes a user by ID.
   * 
   * @param {string} id - The ID of the user to remove.
   * @returns {Promise<User>} The deleted user object.
   */
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}
