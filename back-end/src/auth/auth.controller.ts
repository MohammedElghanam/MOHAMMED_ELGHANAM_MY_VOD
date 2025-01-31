import { Body, Controller, Get, Post, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './authDto/login.dto';
import { Response } from 'express'

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}


  @Post('/login')
  async login (@Body() loginDto: LoginDto, @Res() res: Response): Promise<Response> {
    try {
        const result = await this.authService.login(loginDto);
        return res.status(200).json({
            token: result.token,
        });
    } catch (error) {
        return res.status(400).json({
            message: error.message,
        });
    }
  }
}
