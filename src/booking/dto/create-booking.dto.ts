export class CreateBookingDto {
  user_id: string;
  hotel_name: string;
  room_type: string;
  booking_dates: {
    check_in: Date;
    check_out: Date;
  };
  total_price: number;
}
