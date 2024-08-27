import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
    /**
   * setup for validation 
   */
  app.useGlobalPipes(new ValidationPipe())

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
