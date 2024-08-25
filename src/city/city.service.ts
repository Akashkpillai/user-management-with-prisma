import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { cityDto } from './city.dto';
import { City } from '@prisma/client';

@Injectable()
export class CityService {
    constructor(private prisma:PrismaService){}

    /**
     * create the state
     * @param {cityDto}state the data require for the city
     * @returns {Promise<State>} returns the created Data
     */
    async createCity(state:cityDto):Promise<City>{
        const newState = await this.prisma.city.create({data:state});
        return newState
    }

    /**
     * Get all the state with country city
     *  @returns {Promise<State[]>} A list of all city.
     */
    async getAllState():Promise<City[]>{
        const state = await this.prisma.city.findMany({
            include:{
                country:{
                    select:{
                        name:true,
                        id:true
                    }
                },
                state:{
                    select:{
                        name:true,
                        id:true
                    }
                },
            }
        })
        if(state && state.length){
            return state
        }else{
            throw new NotFoundException("No Data Found")
        }
    }
}
