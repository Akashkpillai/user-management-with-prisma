import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto, Roles } from './create-user.dto';
import { IsEmail, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateUserDto extends PartialType(CreateUserDto) {
    @ApiProperty({ example: "AKASH", description: 'The name of the user' })
    name: string;
    @IsEmail()
    @ApiProperty({ example: "akash001@gmail.com", description: 'The email of the user' })
    email: string;
    @MinLength(6)
    @ApiProperty({ example: "akash@", description: 'The password of the user.Minimum length should be 6' })
    password: string;
    @ApiProperty({ example: 100, description: 'The code of the country' })
    countryId: number;
    @ApiProperty({ example: 1001, description: 'The code of the state' })
    stateId: number;
    @ApiProperty({ example: 10001, description: 'The code of the city' })
    cityId: number;
    @ApiProperty({ example: "ADMIN", description: 'The role of the user(admin/user)' })
    role: Roles;
    @ApiProperty({ example: true, description: 'To block and unblock the users'})
    isBlocked:boolean;
}
