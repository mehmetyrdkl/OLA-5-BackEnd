import {
  Controller,
  Post,
  Body,
  Get,
  ValidationPipe,
  UseGuards,
  Param,
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
    return { message: "You're in buddy" };
  }

  @UseGuards(AuthGuard)
  @Get(':id')
  getUserById(@Param('id') id: string) {
    const user = this.usersService.getUserById(id);
    return user;
  }

  @Post('signup')
  signUp(@Body(new ValidationPipe()) createUserDto: CreateUserDto) {
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
      return { error: 'User not found' };
    }
  }
}
