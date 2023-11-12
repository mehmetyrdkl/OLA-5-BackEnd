import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  async signIn(email: string) {
    const user = await this.usersService.findOne(email);
    return user;
    // if (user?.password !== pass) {
    //   throw new UnauthorizedException();
    // }
    // const payload = { sub: user.userId, username: user.username };
    // return {
    //   access_token: await this.jwtService.signAsync(payload),
    // };
  }
}
