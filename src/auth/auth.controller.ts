import { Controller, Post, Body, Get, ValidationPipe } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { User } from '../users/schemas/user.schema';

@Controller('auth')
export class AuthController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  getUsers(): Promise<User[]> {
    return this.usersService.findAll();
  }

  @Post('signup')
  signUp(@Body(new ValidationPipe()) createUserDto: CreateUserDto) {
    console.log(createUserDto);
    // If email does not exist, proceed
    return this.usersService.create(createUserDto);
  }
}
