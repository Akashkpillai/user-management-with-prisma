import { Body, Controller, Post, UseFilters, UseGuards, UseInterceptors } from '@nestjs/common';
import { CountryService } from './country.service';
import { countryDto } from './country.dto';
import { Country } from '@prisma/client';
import { Roles } from 'src/decorators/role.decorator';
import { AuthGuard } from 'src/guard/authentication.guard';
import { AuthorizationGuard } from 'src/guard/authorization.guard';
import { ApiBearerAuth } from '@nestjs/swagger';
import { HttpExceptionFilter } from 'src/filter/http-exception.filter';
import { ResponseInterceptor } from 'src/interceptor/resinterceptro';

@Controller('country')
@UseGuards(AuthGuard, AuthorizationGuard)
@Roles(["ADMIN"])
@ApiBearerAuth()
@UseFilters(HttpExceptionFilter)
@UseInterceptors(ResponseInterceptor)
export class CountryController {
  constructor(private readonly countryService: CountryService) { }

  /**
 * Creates a new country.
 * @param {CountryDto} countryDto - The data for creating a new country.
 * @returns {Promise<Country>} The created country object.
 */
  @Post('create')
  async createCountry(@Body() country: countryDto) {
    return await this.countryService.create(country);
  }

  /**
* Retrieves all countries from the database.
* @returns {Promise<Country[]>} A list of all countries.
*/
  @Post()
  async getAllCountries(@Body() Body): Promise<Country[]> {
    try {
      return await this.countryService.getAll(Body);
    } catch (error) {
      console.error('Failed to fetch countries:', error);
      throw error;
    }
  }
}
