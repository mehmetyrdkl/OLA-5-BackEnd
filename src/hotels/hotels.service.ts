import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { HotelDocument, Hotel } from './schemas/hotels.schema';

@Injectable()
export class HotelsService {
  constructor(
    @InjectModel(Hotel.name)
    private hotelModel: Model<HotelDocument>,
  ) {}
  async findAll(): Promise<Hotel[]> {
    return this.hotelModel.find().exec();
  }
}
