import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { HttpExceptionFilter } from './filter/http-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
    /**
   * setup for validation 
   */
  app.useGlobalPipes(new ValidationPipe())
   /**
    * Apply filters globally
    */
  app.useGlobalFilters(new HttpExceptionFilter())

  /**
   * setup for swagger
   */
  const config = new DocumentBuilder()
  .setTitle("User management")
  .setDescription("For manageing users by admin")
  .setVersion('1.0')
  .addTag('User')
  .addBearerAuth()
  .build()
  const document = SwaggerModule.createDocument(app,config)
  SwaggerModule.setup('api',app,document)

  await app.listen(3000);
}
bootstrap();
