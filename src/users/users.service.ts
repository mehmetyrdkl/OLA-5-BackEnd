import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as bcrypt from 'bcrypt';
import { User } from './schemas/user.schema';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  //Signup
  async create(createUserDto: CreateUserDto): Promise<User> {
    const { password, ...rest } = createUserDto;
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    const createdUser = new this.userModel({
      ...rest,
      password: hashedPassword,
    });
    return createdUser.save();
  }
  //GetAll
  async findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }
  // findOne
  async findOne(email: string): Promise<User | undefined> {
    return this.userModel.findOne({ email }).exec();
  }
}
