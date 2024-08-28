import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcrypt'
import { LoginDto } from './dto/login-user.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UserService {

  constructor(
    private prisma: PrismaService,
    private readonly jwtService: JwtService
  ) { }

  /**
   * Creates a new user.
   * 
   * @param {CreateUserDto} createUserDto - The data for creating a new user.
   * @returns { Promise<User>} A message indicating the user was added.
   */
  async create(createUserDto: CreateUserDto): Promise<User> {
    const { password, ...rest } = createUserDto
    //To check the user is already there 
    const Exuser = await this.prisma.user.findUnique({ where: { email: rest.email } })
    if (Exuser) {
      throw new HttpException('User already exists', HttpStatus.BAD_REQUEST)
    } else {
      //Hashing the password
      const hashedPassword = await bcrypt.hash(password, 10)
      const user = await this.prisma.user.create({
        data: {
          ...rest,
          password: hashedPassword
        }
      })
      if (user) {
        return user
      } else {
        throw new HttpException(
          { message: "Error while creating user" },
          HttpStatus.CONFLICT
        )
      }
    }
  }
  /**
    *user login.
    * 
    * @param {LoginDto} LoginDto - The data for login.
    * @returns { Promise<{access_token:string}>} A message indicating the jwt is made.
    */
  async login(loginDto: LoginDto): Promise<{ access_token: string }> {
    const { email, password } = loginDto
    const user = await this.prisma.user.findUnique({ where: { email, isBlocked: { not: true } } })
    if (user) {
      const isValidPassword = await bcrypt.compare(password, user.password)
      if (!isValidPassword) {
        throw new HttpException('Invalid password', HttpStatus.BAD_REQUEST)
      }
      if (isValidPassword) {
        const payload = { id: user.id, role: user.role }
        return {
          access_token: await this.jwtService.signAsync(payload),
        };
      }
    } else {
      throw new HttpException('User not found/User is Banned', HttpStatus.NOT_FOUND)
    }
  }

  /**
   * Retrieves all users.
   * 
   * @returns {User[]} A message indicating the users are being returned.
   */
  async findAll(Body): Promise<Omit<User, 'password'>[]> {
    let skip
    let take
    if (Body.page && Body.limit) {
      skip = (Body.page - 1) * Body.limit;
      take = Body.limit
    }
    const users = await this.prisma.user.findMany(
      {
        skip: skip,
        take: take,
        include: {
          country: true,
          state: true,
          city: true
        },
        orderBy: {
          email: 'asc',
        },
      }
    )
    if (!users.length) {
      throw new HttpException('No users found', HttpStatus.NOT_FOUND)
    } else {
      // const userWithoutPass = users.map(({ password, ...rest }) => rest);
      return users;
    }
  }

  /**
   * Retrieves a single user by ID.
   * 
   * @param {string} id - The ID of the user to retrieve.
   * @returns {user} A message indicating the user is being returned.
   */
  async findOne(id: string): Promise<User> {
    const user = await this.prisma.user.findUnique({ where: { id } });
    if (!user) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    } else {
      return user
    }
  }

  /**
   * Updates a user's details.
   * 
   * @param {string} id - The ID of the user to update.
   * @param {UpdateUserDto} updateUserDto - The new data for updating the user.
   * @returns {User} A message indicating the user was updated.
   */
  async update(id: string, updateUserDto: UpdateUserDto): Promise<User> {
    let user = await this.prisma.user.findUnique({ where: { id } })
    if (!user) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }
    user = await this.prisma.user.update({ where: { id }, data: updateUserDto })
    return user
  }

  /**
   * Removes a user by ID.
   * 
   * @param {number} id - The ID of the user to remove.
   * @returns {Promise<User>} A message indicating the user was removed.
   */
  async remove(id: string): Promise<User> {
    const user = await this.prisma.user.findUnique({ where: { id } })
    if (!user) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }
    const Deluser = await this.prisma.user.delete({ where: { id } })
    return Deluser;
  }
  async blockAndUnblock(id: string, updateUserDto: UpdateUserDto): Promise<string> {
    let user = await this.prisma.user.findUnique({ where: { id } })
    if (!user) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }
    user = await this.prisma.user.update({ where: { id }, data: updateUserDto })
    return "User Updated Successfully";
  }
}
