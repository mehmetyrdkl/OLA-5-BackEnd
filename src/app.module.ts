import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { BookingModule } from './booking/booking.module';
import { HotelsModule } from './hotels/hotels.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/comwell'),
    UsersModule,
    AuthModule,
    BookingModule,
    HotelsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
