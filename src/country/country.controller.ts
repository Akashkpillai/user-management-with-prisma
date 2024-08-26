import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { CountryService } from './country.service';
import { countryDto } from './country.dto';
import { Country } from '@prisma/client';
import { Roles } from 'src/decorators/role.decorator';
import { AuthGuard } from 'src/guard/authentication.guard';
import { AuthorizationGuard } from 'src/guard/authorization.guard';

@UseGuards(AuthGuard,AuthorizationGuard)
@Roles(["ADMIN"])
@Controller('country')
export class CountryController {
    constructor(private readonly countryService: CountryService) {}

    /**
   * Creates a new country.
   * @param {CountryDto} countryDto - The data for creating a new country.
   * @returns {Promise<Country>} The created country object.
   */
    @Post('create')
    async createCountry(@Body() country:countryDto){
        return await this.countryService.create(country);
    }

     /**
   * Retrieves all countries from the database.
   * @returns {Promise<Country[]>} A list of all countries.
   */
    @Get()
    async getAllCountries(): Promise<Country[]> {
        try {
          return await this.countryService.getAll();
        } catch (error) {
          console.error('Failed to fetch countries:', error);
          throw error;
        }
      }
}
