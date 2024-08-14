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
    private prisma:PrismaService,
    private readonly jwtService: JwtService
  ) {}

  /**
   * Creates a new user.
   * 
   * @param {CreateUserDto} createUserDto - The data for creating a new user.
   * @returns { Promise<User>} A message indicating the user was added.
   */
  async create(createUserDto: CreateUserDto): Promise<User> {
    let {password,...rest} = createUserDto
    //To check the user is already there 
    const Exuser = await this.prisma.user.findUnique({where:{email:rest.email}})
    if(Exuser){
      throw new HttpException('User already exists',HttpStatus.BAD_REQUEST)
    }else{
       //Hashing the password
    const hashedPassword = await bcrypt.hash(password, 10)
    const user = await this.prisma.user.create({
     data:{
       ...rest,
       password:hashedPassword
     }
    })
    if(user){
     return user
    }else{
     throw new HttpException(
       {message:"Error while creating user"},
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
  async login(loginDto:LoginDto):Promise<{access_token:string}>{
    const {email,password} = loginDto
    const user = await this.prisma.user.findUnique({where:{email}})
    if(user){
      const isValidPassword = await bcrypt.compare(password,user.password)
      if(isValidPassword){
        const payload = {id:user.id,role:user.role}
        return {
          access_token: await this.jwtService.signAsync(payload),
        };
      }
    }else{
      throw new HttpException('User not found',HttpStatus.NOT_FOUND)
    }
  }

  /**
   * Retrieves all users.
   * 
   * @returns {string} A message indicating the users are being returned.
   */
  findAll(): string {
    return `This action returns all user`;
  }

  /**
   * Retrieves a single user by ID.
   * 
   * @param {number} id - The ID of the user to retrieve.
   * @returns {string} A message indicating the user is being returned.
   */
  findOne(id: number): string {
    return `This action returns a #${id} user`;
  }

  /**
   * Updates a user's details.
   * 
   * @param {number} id - The ID of the user to update.
   * @param {UpdateUserDto} updateUserDto - The new data for updating the user.
   * @returns {string} A message indicating the user was updated.
   */
  update(id: number, updateUserDto: UpdateUserDto): string {
    return `This action updates a #${id} user`;
  }

  /**
   * Removes a user by ID.
   * 
   * @param {number} id - The ID of the user to remove.
   * @returns {string} A message indicating the user was removed.
   */
  remove(id: number): string {
    return `This action removes a #${id} user`;
  }
}
