import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SeederService } from './seeder.service';
import { Hotel, HotelSchema } from '../hotels/schemas/hotels.schema'; // Update with your schema path

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Hotel.name, schema: HotelSchema }]),
  ],
  providers: [SeederService],
  exports: [SeederService],
})
export class SeederModule {}
