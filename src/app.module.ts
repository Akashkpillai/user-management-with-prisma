import { Module } from '@nestjs/common';
import { CountryModule } from './country/country.module';
import { StateModule } from './state/state.module';
import { CityModule } from './city/city.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [CountryModule, StateModule, CityModule,PrismaModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
