import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class RegisterAuthDto {
  @IsNotEmpty()
  @IsString()
  firstname_user: string;

  @IsNotEmpty()
  @IsString()
  lastname_user: string;

  @IsNotEmpty()
  @IsString()
  @IsEmail()
  email_user: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(6, { message: 'La contraseña debe tener al menos 6 caracteres' })
  password_user: string;
}
