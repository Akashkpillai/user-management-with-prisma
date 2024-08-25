import { IsEmail, IsNotEmpty, MinLength } from "class-validator";

export class CreateUserDto {
    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @MinLength(6)
    password: string;

    countryId: number;
    stateId: number;
    cityId: number;

    @IsNotEmpty()
    role: Roles;
}

export enum Roles {
    Admin = 'ADMIN',
    User = 'USER'
}
