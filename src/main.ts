import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ExpressAdapter } from '@nestjs/platform-express';
import * as express from 'express';

async function bootstrap() {
  const app = await NestFactory.create(
    AppModule,
    new ExpressAdapter(express()), // Using Express instance
  );

  // Enable CORS for all origins
  app.enableCors();

  await app.listen(8080);
}
bootstrap();
