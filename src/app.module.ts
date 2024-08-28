import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule } from '@nestjs/config';

import { CountryModule } from './country/country.module';
import { StateModule } from './state/state.module';
import { CityModule } from './city/city.module';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    CountryModule, 
    StateModule, 
    CityModule,
    PrismaModule, 
    UserModule,
    
    // JWT Module registration
    JwtModule.register({
      global: true,
      secret: process.env.jwt, // Secret for signing JWT tokens, loaded from environment variables
      signOptions: { expiresIn: '1d' }, // Tokens will expire in 1 day
    }),

    // Configuration Module
    ConfigModule.forRoot({
      isGlobal: true, // Makes the configuration globally available across all modules
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
