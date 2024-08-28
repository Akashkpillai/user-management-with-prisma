import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { HttpExceptionFilter } from './filter/http-exception.filter';
import { SanitizeUserInterceptor } from './interceptor/usersensitive.interceptor';
import { ResponseInterceptor } from './interceptor/resinterceptro';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // Global Validation Setup
  app.useGlobalPipes(new ValidationPipe());

  // Global Exception Filter Setup
  app.useGlobalFilters(new HttpExceptionFilter());

  // Global Intercption setup
  app.useGlobalInterceptors(new SanitizeUserInterceptor(),new ResponseInterceptor());

  // Swagger Setup
  const config = new DocumentBuilder()
    .setTitle("User Management")
    .setDescription("For managing users by admin")
    .setVersion('1.0')
    .addTag('User')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  // Start listening on port 3000
  await app.listen(3000);
}
bootstrap();

