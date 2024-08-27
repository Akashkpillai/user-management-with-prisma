import { Body, Controller, Post, UseFilters, UseGuards } from '@nestjs/common';
import { CityService } from './city.service';
import { cityDto } from './city.dto';
import { City } from '@prisma/client';
import { AuthorizationGuard } from 'src/guard/authorization.guard';
import { AuthGuard } from 'src/guard/authentication.guard';
import { Roles } from 'src/decorators/role.decorator';
import { ApiBearerAuth } from '@nestjs/swagger';
import { HttpExceptionFilter } from 'src/filter/http-exception.filter';

@UseGuards(AuthGuard,AuthorizationGuard)
@Roles(["ADMIN"])
@Controller('city')
@ApiBearerAuth()
@UseFilters(HttpExceptionFilter)
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
    @Post()
    async getAllState(@Body() Body):Promise<City[]>{
        return this.cityService.getAllState(Body)
    }
}
