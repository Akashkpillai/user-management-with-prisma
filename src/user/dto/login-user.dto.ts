import { IsEmail, IsNotEmpty, MinLength } from "class-validator";

export class LoginDto {
    @IsNotEmpty()
    @IsEmail({},{message:"Please provide a valid email"})
    email: string;

    @IsNotEmpty()
    @MinLength(6)
    password: string;
}