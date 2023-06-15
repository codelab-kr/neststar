import { Logger, Module } from '@nestjs/common';
import { APP_FILTER } from '@nestjs/core';
// import { HttpExceptionFilter } from '../filter/http.exception.filter';
import { HttpExceptionFilter } from './exception.filter';
@Module({
  providers: [
    Logger,
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
    },
  ],
})
export class ExceptionModule {}
