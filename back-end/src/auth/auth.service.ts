import { BadRequestException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import * as bcrypt from 'bcryptjs';
import { Model } from 'mongoose';
import { User } from './schemas/user.schema';
import { LoginDto } from './authDto/login.dto';

@Injectable()
export class AuthService {

    constructor( 
        @InjectModel(User.name) private userModel: Model<User>, 
        // private jwtService: JwtService        
    ){}

    async login ( loginDto: LoginDto ): Promise<{ token: string }> {
        const { email, password } = loginDto;

        const token = "hello";
        return { token };

        // const user = await this.userModel.findOne({ email })
        // if( !user ) throw new Error('User not found');

        // try {
        //     const isMatch = await bcrypt.compare(password, user.password)
        //     if( !isMatch ) throw new Error('Password incorrect');

        //     const token = this.jwtService.sign({ 
        //         userId: user._id, 
        //         name: user.name,
        //         email: user.email, 
        //     });

        //     return { token };

        // } catch (error) {
        //     console.error('Login error:', error);
        //     throw new Error('Login failed');
        // }
    }
}
