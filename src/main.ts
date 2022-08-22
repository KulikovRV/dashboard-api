import App from './app';
import LoggerService from './logger/logger.service';

async function bootstrap() {
  // простйшая DI, мы внедряем в app зависимость от другого сервиса
  const app = new App(new LoggerService());
  await app.init();
}

bootstrap();
