import App from './app';
import LoggerService from './logger/logger.service';
import UserController from './users/user.controller';
import ExceptionFilter from './errors/exeption.filter';

async function bootstrap() {
  // простйшая DI, мы внедряем в app зависимость от другого сервиса
  const logger = new LoggerService();
  const app = new App(
    logger,
    new UserController(logger),
    new ExceptionFilter(logger),
  );
  await app.init();
}

bootstrap();
