import { Body, Controller, Get, Post } from '@nestjs/common';
import { GetTemplateVersionHandler } from 'src/core/queries/get-template-version/get-template-version.handler';
import { TemplateVersion } from 'src/core/queries/get-template-version/template-version';
import { CreateTemplateVersionDto } from '../models/create-template-version.dto';
import { CreateTemplateVersionHandler } from 'src/core/commands/create-template-version/create-template-version.handler';
import { CreateTemplateVersionCommand } from 'src/core/commands/create-template-version/create-template-version.command';

@Controller('template')
export class TemplateVersionController {
  constructor(
    private getTemplateVersionHandler: GetTemplateVersionHandler,
    private createTemplateVersionHandler: CreateTemplateVersionHandler,
  ) {}

  @Get('version')
  async getTemplateVersion(): Promise<TemplateVersion> {
    const templateVersion = await this.getTemplateVersionHandler.handleAsync();

    return templateVersion;
  }

  @Post('version')
  async createTemplateVersion(@Body() request: CreateTemplateVersionDto): Promise<void> {
    const command: CreateTemplateVersionCommand = {
      test1: request.test1,
      test2: request.test2,
    };
    await this.createTemplateVersionHandler.handleAsync(command);
  }
}
