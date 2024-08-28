import { Body, Controller, Post, UseFilters, UseGuards } from '@nestjs/common';
import { StateService } from './state.service';
import { StateDto } from './state.dto';
import { State } from '@prisma/client';
import { Roles } from 'src/decorators/role.decorator';
import { AuthGuard } from 'src/guard/authentication.guard';
import { AuthorizationGuard } from 'src/guard/authorization.guard';
import { ApiBearerAuth } from '@nestjs/swagger';
import { HttpExceptionFilter } from 'src/filter/http-exception.filter';

@UseGuards(AuthGuard, AuthorizationGuard)
@Roles(["ADMIN"])
@ApiBearerAuth()
@UseFilters(HttpExceptionFilter)
@Controller('state')
export class StateController {
    constructor(private stateService: StateService) { }
    /**
     *Create a state
     * @param {StateDto} StateData The data for creating the state
     * @returns {Promise<State>} The state just created
     */
    @Post('create')
    async createState(@Body() StateData: StateDto): Promise<State> {
        return this.stateService.createState(StateData);
    }

    /**
     * Returns all the state list
     * @returns {Promise<State[]>} A list of all state
     */
    @Post()
    async getAllState(@Body() Body): Promise<State[]> {
        return this.stateService.getAllState(Body)
    }
}
