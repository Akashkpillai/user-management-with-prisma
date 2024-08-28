import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { StateDto } from './state.dto';
import { State } from '@prisma/client';

@Injectable()
export class StateService {
    constructor(private prisma: PrismaService) { }

    /**
     * create the state
     * @param {StateDto}state the data require for the state 
     * @returns {Promise<State>} returns the created Data
     */
    async createState(state: StateDto): Promise<State> {
        const newState = await this.prisma.state.create({ data: state });
        return newState
    }

    /**
     * Get all the state with country Data
     *  @returns {Promise<State[]>} A list of all countries.
     */
    async getAllState(Body): Promise<State[]> {
        let skip
        let take
        if (Body.page && Body.limit) {
            skip = (Body.page - 1) * Body.limit;
            take = Body.limit
        }
        const state = await this.prisma.state.findMany({
            include: {
                country: true
            },
            skip: skip,
            take: take,
        })
        if (state && state.length) {
            return state
        } else {
            throw new NotFoundException("No Data Found")
        }
    }
}
