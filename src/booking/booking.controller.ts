import { Body, Controller, Post, Get, Headers } from '@nestjs/common';
import { BookingService } from './booking.service';
import { CreateBookingDto } from './dto/create-booking.dto';

@Controller('booking')
export class BookingController {
  constructor(private readonly bookingService: BookingService) {}

  // POST /bookings
  // It would expect data in the request body
  // such as user ID, hotel information and other details.
  // It would be modeled in a mongoose schema.
  // It would use the bookings.service.ts to handle the
  // creation of the booking.
  @Post()
  async createBooking(@Body() createBookingDto: CreateBookingDto) {
    return this.bookingService.createBooking(createBookingDto);
  }

  // GET /bookings/user/:userId
  // Retrieve details for a specific booking.

  // @UseGuards(AuthGuard)
  @Get()
  async getBookings(@Headers('authorization') token: string) {
    return this.bookingService.getBookingByUserId(token);
  }

  // ## OPTIONAL ENDPOINTS
  // PUT /bookings/:bookingId
  // Update details for a specific booking

  // DELETE /bookings/:bookingId
  // Delete a specific booking
}
