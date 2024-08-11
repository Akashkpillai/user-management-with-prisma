import { IsNotEmpty } from "class-validator";

export class StateDto{
    @IsNotEmpty()
    name: string;
    @IsNotEmpty()
    countryId:string
}