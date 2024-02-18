import { Injectable } from '@nestjs/common';
import { TemplateVersion } from './template-version';

@Injectable()
export class GetTemplateVersionHandler {
  public async handleAsync(): Promise<TemplateVersion> {
    return Promise.resolve({
      appName: '1',
      appVersion: '1',
    });
  }
}
