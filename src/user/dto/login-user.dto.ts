import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, MinLength } from "class-validator";

export class LoginDto {
    @IsNotEmpty()
    @IsEmail({},{message:"Please provide a valid email"})
    @ApiProperty({ example: "akash@gmail.com", description: 'The email of the user' })
    email: string;

    @IsNotEmpty()
    @MinLength(6)
    @ApiProperty({ example: "pillai", description: 'The password of the user.Minimum length should be 6' })
    password: string;
}