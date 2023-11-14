import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Booking {
  @Prop()
  user_id: string;

  @Prop()
  hotel_name: string;

  @Prop()
  room_number: number;

  @Prop()
  booking_dates: {
    check_in: Date;
    check_out: Date;
  };

  @Prop()
  total_price: number;
}

export const BookingSchema = SchemaFactory.createForClass(Booking);
