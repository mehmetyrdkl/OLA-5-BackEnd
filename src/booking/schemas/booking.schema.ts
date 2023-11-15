import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type BookingDocument = Booking & Document;

@Schema()
export class Booking {
  @Prop({ required: true })
  user_id: string;

  @Prop({ required: true })
  hotel_name: string;

  @Prop({ required: true })
  room_number: number;

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
