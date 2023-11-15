export class CreateBookingDto {
  user_id: string;
  hotel_name: string;
  room_number: number;
  booking_dates: {
    check_in: Date;
    check_out: Date;
  };
  total_price: number;
}
