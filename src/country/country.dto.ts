import { IsNotEmpty } from "class-validator";

export class countryDto {
    @IsNotEmpty()
    name: string
}