import { Body, Controller, Get, Post } from '@nestjs/common';
import { CityService } from './city.service';
import { cityDto } from './city.dto';
import { City } from '@prisma/client';

@Controller('city')
export class CityController {
    constructor(private cityService:CityService){}
/**
 *Create a state
 * @param {cityDto} StateData The data for creating the city
 * @returns {Promise<City>} The city just created
 */
    @Post('create')
    async createState(@Body() StateData:cityDto):Promise<City>{
        return this.cityService.createCity(StateData);
    }

/**
 * Returns all the city list
 * @returns {Promise<City[]>} A list of all city
 */
    @Get()
    async getAllState():Promise<City[]>{
        return this.cityService.getAllState()
    }
}
