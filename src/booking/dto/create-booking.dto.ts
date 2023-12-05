export class CreateBookingDto {
  user_id: string;
  hotel_name: string;
  rooms: {
    room_type: string;
    number_of_guests: number;
    guest_full_name: string;
    addons: string[];
    packages: string;
  }[];
  booking_dates: {
    check_in: Date;
    check_out: Date;
  };
  total_price: number;
}
