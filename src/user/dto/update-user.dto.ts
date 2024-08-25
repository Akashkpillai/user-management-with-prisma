import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto, Roles } from './create-user.dto';
import { IsEmail, MinLength } from 'class-validator';

export class UpdateUserDto extends PartialType(CreateUserDto) {
    name: string;
    @IsEmail()
    email: string;
    @MinLength(6)
    password: string;
    countryId: number;
    stateId: number;
    cityId: number;
    role: Roles;
    isBlocked:boolean;
}
