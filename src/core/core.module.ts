import { Module } from '@nestjs/common';
import { GetTemplateVersionHandler } from './queries/get-template-version/get-template-version.handler';
import { CreateTemplateVersionHandler } from './commands/create-template-version/create-template-version.handler';
import { ConfigModule } from '@nestjs/config';
import testConfig from './common/config/test.config';

@Module({
  providers: [GetTemplateVersionHandler, CreateTemplateVersionHandler],
  exports: [GetTemplateVersionHandler, CreateTemplateVersionHandler],
  imports: [ConfigModule.forFeature(testConfig)],
})
export class CoreModule {}
