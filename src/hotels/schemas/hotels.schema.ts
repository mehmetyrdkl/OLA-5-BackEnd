import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type HotelDocument = Hotel & Document;

@Schema()
export class Hotel {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  region: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  location: string;

  @Prop({ required: true })
  hotelImage: string;

  @Prop({ required: true })
  hotelAddress: string;

  @Prop({ required: true })
  hotelPostcode: number;

  @Prop({ required: true })
  hotelCity: string;

  @Prop({ required: true })
  hotelCountry: string;

  @Prop({
    type: [
      {
        type: {
          type: String,
          enum: ['Single Room', 'Double Room', 'Suite'],
        },
        description: String,
        availability: Number,
        facilities: [String],
        price: Number,
        roomImage: String,
        size: Number,
      },
    ],
    required: true,
  })
  rooms: {
    type: string;
    description: string;
    availability: number;
    facilities: string[];
    price: number;
    roomImage: string;
    size: number;
  }[];
}

export const HotelSchema = SchemaFactory.createForClass(Hotel);
