import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class countryDto {
    @IsNotEmpty()
    @ApiProperty({ example: "India", description: 'The name of the country' })
    name: string
    @IsNotEmpty()
    @ApiProperty({ example: 100, description: 'This is the code of the country' })
    code: number
}