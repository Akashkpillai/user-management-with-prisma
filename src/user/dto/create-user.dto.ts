import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, MinLength } from "class-validator";

export class CreateUserDto {
    @IsNotEmpty()
    @ApiProperty({ example: "AKASH", description: 'The name of the user' })
    name: string;

    @IsNotEmpty()
    @IsEmail()
    @ApiProperty({ example: "akash001@gmail.com", description: 'The email of the user' })
    email: string;

    @IsNotEmpty()
    @MinLength(6)
    @ApiProperty({ example: "akash@", description: 'The password of the user.Minimum length should be 6' })
    password: string;

    @ApiProperty({ example: 100, description: 'The code of the country' })
    countryId: number;
    @ApiProperty({ example: 1001, description: 'The code of the state' })
    stateId: number;
    @ApiProperty({ example: 10001, description: 'The code of the city' })
    cityId: number;

    @IsNotEmpty()
    @ApiProperty({ example: "ADMIN", description: 'The role of the user(admin/user)' })
    role: Roles;
}

export enum Roles {
    Admin = 'ADMIN',
    User = 'USER'
}
