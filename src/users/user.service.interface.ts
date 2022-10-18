import { UsersRegisterDto } from './dto/users-register.dto';
import { UsersLoginDto } from './dto/users-login.dto';
import { UserModel } from '@prisma/client';

export interface IUserService {
	createUser: (dto: UsersRegisterDto) => Promise<UserModel | null>;
	validateUser: (dto: UsersLoginDto) => Promise<boolean>;
}
