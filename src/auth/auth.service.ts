import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/users/user.entity';
import { Repository } from 'typeorm';
import { RegisterAuthDto } from './dto/register-auth.dto';
import { LoginAuthDto } from './dto/login-auth.dto';
import { compare } from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User) private usersRepository: Repository<User>,
  ) {}

  async register(user: RegisterAuthDto) {
    const { email_user } = user;

    const emailExist = await this.usersRepository.findOneBy({
      email_user: email_user,
    });

    if (emailExist) {
      return new HttpException('Email already exists', HttpStatus.CONFLICT); //409
    }

    /*

    const phoneExist = await this.usersRepository.findOneBy({
      phone_user: user.phone_user,
    });

    if (phoneExist) {
      return new HttpException('Phone already exists', HttpStatus.CONFLICT); //409
    }
    */
    const newUser = this.usersRepository.create(user);
    return this.usersRepository.save(newUser); // guarda usuario en la base de datos
  }

  async login(loginData: LoginAuthDto) {
    const { email_user, password_user } = loginData;
    const userFound = await this.usersRepository.findOneBy({
      email_user: email_user,
    });
    if (!userFound) {
      return new HttpException('Email is incorrect', HttpStatus.NOT_FOUND); //404
    }

    const isPasswordValid = await compare(
      password_user,
      userFound.password_user,
    );
    if (!isPasswordValid) {
      return new HttpException('Password is incorrect', HttpStatus.FORBIDDEN); //403 Forbidden
    }

    return userFound;
  }
}
