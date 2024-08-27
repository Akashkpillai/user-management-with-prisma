import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class StateDto{
    @IsNotEmpty()
    @ApiProperty({ example: "Kerala", description: 'The name of the state' })
    name: string;
    @IsNotEmpty()
    @ApiProperty({ example: 100, description: 'This is the code of the country' })
    countryId:number
    @IsNotEmpty()
    @ApiProperty({ example: 1001, description: 'This is the code of the state' })
    code: number;
}