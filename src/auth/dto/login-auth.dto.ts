import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class LoginAuthDto {
  @IsNotEmpty()
  @IsString()
  @IsEmail()
  email_user: string;

  @IsNotEmpty()
  @IsString()
  password_user: string;
}
