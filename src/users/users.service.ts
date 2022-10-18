import { IUserService } from './user.service.interface';
import { UsersRegisterDto } from './dto/users-register.dto';
import { UsersLoginDto } from './dto/users-login.dto';
import { inject, injectable } from 'inversify';
import { User } from './users.entity';
import { TYPES } from '../types';
import { IConfigService } from '../config/config.service.interface';

@injectable()
export class UsersService implements IUserService {
	constructor(@inject(TYPES.ConfigService) private configService: IConfigService) {}
	async createUser({ email, name, password }: UsersRegisterDto): Promise<User | null> {
		const newUser = new User(email, name);
		const salt = this.configService.get('SALT');
		await newUser.setPassword(password, Number(salt));
		return null;
	}

	async validateUser(dto: UsersLoginDto): Promise<boolean> {
		return true;
	}
}
