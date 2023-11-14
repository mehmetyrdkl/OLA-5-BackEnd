import {
  Controller,
  Post,
  Body,
  Get,
  ValidationPipe,
  UseGuards,
} from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly usersService: UsersService,
    private readonly authService: AuthService,
  ) {}

  @UseGuards(AuthGuard)
  @Get('profile')
  getAccess() {
    return 'Your in buddy';
  }

  @Post('signup')
  signUp(@Body(new ValidationPipe()) createUserDto: CreateUserDto) {
    console.log(createUserDto);
    // If email does not exist, proceed
    return this.usersService.create(createUserDto);
  }

  @Post('login')
  async logIn(@Body() signInDto: Record<string, any>) {
    const user = await this.authService.signIn(
      signInDto.email,
      signInDto.password,
    );
    if (user) {
      return user;
    } else {
      // Handle the case where user is not found (e.g., return an error response)
      return { error: 'User not found' };
    }
  }
}
