import express, { Express } from 'express';
import { Server } from 'http';
import LoggerService from './logger/logger.service.js';
import userRouter from './users/users.js';

export default class App {
  app: Express;

  port: number;

  server: Server;

  logger: LoggerService;

  constructor(logger: LoggerService) {
    this.app = express();
    this.port = 8000;
    this.logger = logger;
  }

  useRoutes() {
    this.app.use('/users', userRouter);
  }

  public async init() {
    this.useRoutes();
    this.server = this.app.listen(this.port);
    this.logger.log('SERVER START ON PORT ', this.port);
  }
}
