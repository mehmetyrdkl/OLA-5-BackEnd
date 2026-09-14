import {
  Body,
  Controller,
  Post,
  Get,
  Req,
  UnauthorizedException,
  UseGuards,
} from '@nestjs/common';
import { BookingService } from './booking.service';
import { CreateBookingDto } from './dto/create-booking.dto';
import { AuthGuard } from 'src/auth/auth.guard';
import { Request } from 'express';

@Controller('booking')
export class BookingController {
  constructor(private readonly bookingService: BookingService) {}

  @Post()
  async createBooking(@Body() createBookingDto: CreateBookingDto) {
    return this.bookingService.createBooking(createBookingDto);
  }

  @Get()
  @UseGuards(AuthGuard)
  async getBookings(@Req() request: Request) {
    const userId = request['user']?.id as string;
    if (!userId) {
      throw new UnauthorizedException();
    }
    return this.bookingService.getBookingByUserId(userId);
  }
}
