import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class cityDto{
    @IsNotEmpty()
    @ApiProperty({ example: "Kochi", description: 'The name of the city' })
    name:string
    @IsNotEmpty()
    @ApiProperty({ example: 100, description: 'This is the code of the country' })
    countryId:number
    @IsNotEmpty()
    @ApiProperty({ example: 1001, description: 'This is the code of the state' })
    stateId:number
    @IsNotEmpty()
    @ApiProperty({ example: 10001, description: 'This is the code of the city' })
    code:number
}