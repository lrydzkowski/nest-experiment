import { Module } from '@nestjs/common';
import { AppController } from './controllers/app.controller';
import { CoreModule } from 'src/core/core.module';
import { TemplateVersionController } from './controllers/template-version.controller';
import { APP_FILTER } from '@nestjs/core';
import { ValidationErrorFilter } from './errors-handling/validation-error.filter';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    CoreModule,
    ConfigModule.forRoot({
      envFilePath: ['.env.development.local', '.env.development'],
    }),
  ],
  controllers: [AppController, TemplateVersionController],
  providers: [
    {
      provide: APP_FILTER,
      useClass: ValidationErrorFilter,
    },
  ],
})
export class ApiModule {}
