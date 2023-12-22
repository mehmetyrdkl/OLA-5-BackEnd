import { Model } from 'mongoose';
import {
  Injectable,
  ConflictException,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as bcrypt from 'bcrypt';
import { User } from './schemas/user.schema';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  // Signup
  async create(createUserDto: CreateUserDto): Promise<User> {
    const { email, password, ...rest } = createUserDto;

    // Check if the email is already in use
    const existingUser = await this.userModel.findOne({ email }).exec();
    if (existingUser) {
      throw new ConflictException('Email address is already in use');
    }

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    const createdUser = new this.userModel({
      ...rest,
      email,
      password: hashedPassword,
    });

    try {
      return await createdUser.save();
    } catch (error) {
      throw new ConflictException('Error creating user');
    }
  }

  // GetAll
  async findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  // findOne
  async findOne(email: string): Promise<User | undefined> {
    const user = await this.userModel.findOne({ email }).exec();
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return user;
  }

  // findOneById
  async getUserById(id: string): Promise<User | null> {
    try {
      const user = await this.userModel.findById(id).exec();
      return user;
    } catch (error) {
      console.error('Error retrieving user by ID:', error);
      return null;
    }
  }
}
