import { Module } from '@nestjs/common';
import { AppController } from './controllers/app.controller';
import { CoreModule } from 'src/core/core.module';
import { TemplateVersionController } from './controllers/template-version.controller';
import { APP_FILTER } from '@nestjs/core';
import { ValidationErrorFilter } from './errors-handling/validation-error.filter';

@Module({
  imports: [CoreModule],
  controllers: [AppController, TemplateVersionController],
  providers: [
    {
      provide: APP_FILTER,
      useClass: ValidationErrorFilter,
    },
  ],
})
export class ApiModule {}
