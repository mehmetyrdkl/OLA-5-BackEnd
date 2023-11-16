import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';
export class CreateUserDto {
  @IsNotEmpty()
  fullName: string;

  @IsEmail()
  email: string;

  @MinLength(3)
  password: string;

  @MinLength(6)
  phoneNumber: string;

  @MinLength(4)
  gender: string;

  @MinLength(4)
  zipcode: string;

  @IsNotEmpty()
  birthdate: string;
}
