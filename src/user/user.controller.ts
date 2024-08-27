import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from '@prisma/client';
import { LoginDto } from './dto/login-user.dto';
import { AuthGuard } from 'src/guard/authentication.guard';
import { AuthorizationGuard } from 'src/guard/authorization.guard';
import { Roles } from 'src/decorators/role.decorator';
import { ApiBearerAuth } from '@nestjs/swagger';

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
   * @returns {Promise<Omit<User, 'password'>[]>} A list of all users without password.
   */
  @UseGuards(AuthGuard,AuthorizationGuard)
  @Roles(["ADMIN"])
  @Post()
  @ApiBearerAuth()
  findAll(@Body() Body) {
    return this.userService.findAll(Body);
  }

  /**
   * Retrieves a single user by ID.
   * 
   * @param {string} id - The ID of the user to retrieve.
   * @returns {Promise<User>} The user object with the specified ID.
   */
  @UseGuards(AuthGuard,AuthorizationGuard)
  @Roles(["ADMIN"])
  @ApiBearerAuth()
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(id);
  }

  /**
   * Updates a user's details.
   * 
   * @param {string} id - The ID of the user to update.
   * @param {UpdateUserDto} updateUserDto - The new data for updating the user.
   * @returns {Promise<User>} The updated user object.
   */
  @Patch(':id')
  @UseGuards(AuthGuard,AuthorizationGuard)
  @Roles(["ADMIN","USER"])
  @ApiBearerAuth()
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(id, updateUserDto);
  }

   /**
   * Bolck or unBlock a user's details.
   * 
   * @param {string} id - The ID of the user to update.
   * @param {UpdateUserDto} updateUserDto - The new data for updating the user.
   * @returns {Promise<User>} The updated user object.
   */
   @UseGuards(AuthGuard,AuthorizationGuard)
   @Roles(["ADMIN"])
  @ApiBearerAuth()
   @Patch('block/:id')
   blockOrUnblock(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
     return this.userService.blockAndUnblock(id, updateUserDto);
   }

  /**
   * Removes a user by ID.
   * 
   * @param {string} id - The ID of the user to remove.
   * @returns {Promise<User>} The deleted user object.
   */
  @Delete(':id')
  @UseGuards(AuthGuard,AuthorizationGuard)
  @Roles(["ADMIN"])
  @ApiBearerAuth()
  remove(@Param('id') id: string) {
    return this.userService.remove(id);
  }
}
