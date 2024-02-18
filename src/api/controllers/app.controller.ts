import { Controller, Get } from '@nestjs/common';
import { IsHealthyRequestDto } from '../models/is-healthy-request.dto';
import { GetTemplateVersionHandler } from 'src/core/queries/get-template-version/get-template-version.handler';

@Controller()
export class AppController {
  constructor(private getTemplateVersionHandler: GetTemplateVersionHandler) {}

  @Get()
  isHealthy(): IsHealthyRequestDto {
    return {
      healthy: true,
    };
  }
}
