import { IsEmail, IsString } from 'class-validator';

export class UsersRegisterDto {
	@IsEmail({}, { message: 'Not correct email format' })
	email: string;

	@IsString({ message: 'Password not specified' })
	password: string;

	@IsString({ message: 'Name not specified' })
	name: string;
}
