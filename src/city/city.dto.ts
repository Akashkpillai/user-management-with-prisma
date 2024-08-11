import { IsNotEmpty } from "class-validator";

export class cityDto{
    @IsNotEmpty()
    name:string
    @IsNotEmpty()
    countryId:string
    @IsNotEmpty()
    stateId:string
}