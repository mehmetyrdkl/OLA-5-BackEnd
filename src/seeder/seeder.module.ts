import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SeederService } from './seeder.service';
import { Hotel, HotelSchema } from '../hotels/schemas/hotels.schema'; // Update with your schema path

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Hotel.name, schema: HotelSchema }]),
    // Any other modules or dependencies needed for seeding can be imported here
  ],
  providers: [SeederService],
  exports: [SeederService], // Export the service if needed elsewhere
})
export class SeederModule {}
