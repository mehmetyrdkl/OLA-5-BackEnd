import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type BookingDocument = Booking & Document;

@Schema()
export class Booking {
  @Prop({ required: true })
  user_id: string;

  @Prop({ required: true })
  hotel_name: string;

  @Prop({
    type: [
      {
        room_type: { type: String, required: true },
        addons: [
          {
            type: String,
            enum: ['Babycot', 'Early check-in', 'Late departure'],
          },
        ],
        number_of_guests: { type: Number, required: true },
        guest_full_name: [String],
        packages: {
          type: String,
          enum: ['package1', 'package2', 'package3'],
          require: true,
        },
      },
    ],
    required: true,
  })
  rooms: {
    room_type: string;
    number_of_guests: number;
    guest_full_name: string;
    addons?: string[];
    packages: string;
  }[];

  @Prop({
    required: true,
    type: {
      check_in: { type: Date, required: true },
      check_out: { type: Date, required: true },
    },
  })
  booking_dates: {
    check_in: Date;
    check_out: Date;
  };

  @Prop({ required: true })
  total_price: number;
}

export const BookingSchema = SchemaFactory.createForClass(Booking);
