import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Country } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { countryDto } from './country.dto';

@Injectable()
export class CountryService {
  constructor(private prisma: PrismaService) { }

  /**
* Creates a new country in the database.
* @param {CountryDto} countryData - The data for the new country.
* @returns {Promise<Country>} The created country object.
*/
  async create(countryData: countryDto): Promise<Country> {
    // Check if a country with the same name already exists
    const existingCountry = await this.prisma.country.findUnique({
      where: { name: countryData.name },
    });

    if (existingCountry) {
      throw new HttpException(
        { message: `Country with name "${countryData.name}" already exists.` },
        HttpStatus.CONFLICT,
      );
    }

    try {
      // Create the new country
      const country = await this.prisma.country.create({
        data: { ...countryData },
      });
      return country;
    } catch (error) {
      throw new HttpException(
        { message: 'Error while creating country', details: error.message },
        HttpStatus.BAD_REQUEST,
      );
    }
  }


  /**
 * Retrieves all countries from the database.
 * @returns {Promise<Country[]>} A list of all countries.
 */
  async getAll(Body): Promise<Country[]> {
    let skip
    let take
    if (Body.page && Body.limit) {
      skip = (Body.page - 1) * Body.limit;
      take = Body.limit
    }
    const countries = await this.prisma.country.findMany(
      {
        skip: skip,
        take: take,
      }
    );
    return countries

  }
}
