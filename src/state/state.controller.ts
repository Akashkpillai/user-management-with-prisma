import { Body, Controller, Get, Post } from '@nestjs/common';
import { StateService } from './state.service';
import { StateDto } from './state.dto';
import {  State } from '@prisma/client';

@Controller('state')
export class StateController {
    constructor(private stateService:StateService){}
/**
 *Create a state
 * @param {StateDto} StateData The data for creating the state
 * @returns {Promise<State>} The state just created
 */
    @Post('create')
    async createState(@Body() StateData:StateDto):Promise<State>{
        return this.stateService.createState(StateData);
    }

/**
 * Returns all the state list
 * @returns {Promise<State[]>} A list of all state
 */
    @Get()
    async getAllState():Promise<State[]>{
        return this.stateService.getAllState()
    }
}
