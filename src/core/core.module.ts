import { Module } from '@nestjs/common';
import { GetTemplateVersionHandler } from './queries/get-template-version/get-template-version.handler';
import { CreateTemplateVersionHandler } from './commands/create-template-version/create-template-version.handler';

@Module({
  providers: [GetTemplateVersionHandler, CreateTemplateVersionHandler],
  exports: [GetTemplateVersionHandler, CreateTemplateVersionHandler],
})
export class CoreModule {}
