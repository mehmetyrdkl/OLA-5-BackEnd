import { NestFactory } from '@nestjs/core';
import { SeederService } from './seeder/seeder.service'; // Update with your service path
import { AppModule } from './app.module';
import { ExpressAdapter } from '@nestjs/platform-express';
import * as express from 'express';

async function bootstrap() {
  const app = await NestFactory.create(
    AppModule,
    new ExpressAdapter(express()),
  );

  app.enableCors();

  const seederService = app.get(SeederService);
  await seederService.seedDatabase(); // Seed the database on app start

  await app.listen(8080);
}
bootstrap();
