import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto, Roles } from './create-user.dto';
import { IsEmail, MinLength } from 'class-validator';

export class UpdateUserDto extends PartialType(CreateUserDto) {
    name: string;
    @IsEmail()
    email: string;
    @MinLength(6)
    password: string;
    countryId: string;
    stateId: string;
    cityId: string;
    role: Roles;
    isBlocked:boolean;
}
