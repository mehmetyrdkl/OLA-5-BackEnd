import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';
export class CreateUserDto {
  @IsNotEmpty()
  fullName: string;

  @IsEmail()
  email: string;

  @MinLength(3)
  password: string;

  @MinLength(6)
  phoneNumber: number;

  @MinLength(3)
  address: string;
}
