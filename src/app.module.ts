import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { BookingModule } from './booking/booking.module';
import { HotelsModule } from './hotels/hotels.module';
import { SeederModule } from './seeder/seeder.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/comwell'),
    // MongooseModule.forRoot('mongodb://username:password@mongo'),
    UsersModule,
    AuthModule,
    BookingModule,
    HotelsModule,
    SeederModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
