import { IsNotEmpty } from "class-validator";

export class cityDto{
    @IsNotEmpty()
    name:string
    @IsNotEmpty()
    countryId:number
    @IsNotEmpty()
    stateId:number
    @IsNotEmpty()
    code:number
}