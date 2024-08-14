import { Module } from '@nestjs/common';
import { CountryModule } from './country/country.module';
import { StateModule } from './state/state.module';
import { CityModule } from './city/city.module';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [CountryModule, StateModule, CityModule,PrismaModule, UserModule,
    JwtModule.register({
      global: true,
      secret: process.env.jwt,
      signOptions: { expiresIn: '1d' },
    }),
    ConfigModule.forRoot({
      isGlobal: true,
    })
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
