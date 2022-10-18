import { IsEmail, IsString } from 'class-validator';

export class UsersLoginDto {
	@IsEmail({}, { message: 'Not correct email format' })
	email: string;

	@IsString()
	password: string;
}
