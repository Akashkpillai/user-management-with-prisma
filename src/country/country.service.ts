import { Injectable } from '@nestjs/common';
import { Country } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { countryDto } from './country.dto';

@Injectable()
export class CountryService {
    constructor(private prisma:PrismaService){}

      /**
   * Creates a new country in the database.
   * @param {CountryDto} countryData - The data for the new country.
   * @returns {Promise<Country>} The created country object.
   */
    async create(Countrydata:countryDto):Promise<Country> {
        const country = await this.prisma.country.create({
            data: {
                ...Countrydata
            }
        })
        return country;
    }

    /**
   * Retrieves all countries from the database.
   * @returns {Promise<Country[]>} A list of all countries.
   */
    async getAll():Promise<Country[]>{
        const countries = await this.prisma.country.findMany();
       return countries
    
    }
}
