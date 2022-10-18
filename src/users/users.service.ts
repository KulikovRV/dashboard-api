import { IUserService } from './user.service.interface';
import { UsersRegisterDto } from './dto/users-register.dto';
import { UsersLoginDto } from './dto/users-login.dto';
import { inject, injectable } from 'inversify';
import { User } from './users.entity';
import { TYPES } from '../types';
import { IConfigService } from '../config/config.service.interface';
import { IUsersRepository } from './users.repository.interface';
import { UserModel } from '@prisma/client';

@injectable()
export class UsersService implements IUserService {
	constructor(
		@inject(TYPES.ConfigService) private configService: IConfigService,
		@inject(TYPES.UsersRepository) private usersRepository: IUsersRepository,
	) {}
	async createUser({ email, name, password }: UsersRegisterDto): Promise<UserModel | null> {
		const newUser = new User(email, name);
		const salt = this.configService.get('SALT');
		await newUser.setPassword(password, Number(salt));
		const existedUser = await this.usersRepository.find(email);
		if (existedUser) {
			return null;
		}

		return this.usersRepository.create(newUser);
	}

	async validateUser(dto: UsersLoginDto): Promise<boolean> {
		return true;
	}
}