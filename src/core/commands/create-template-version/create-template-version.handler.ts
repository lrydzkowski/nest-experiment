import { Inject, Injectable } from '@nestjs/common';
import { CreateTemplateVersionCommand } from './create-template-version.command';
import { CreateTemplateVersionValidator } from './create-template-version.validator';
import { ValidationError } from 'src/core/common/errors-handling/validation.error';
import { ConfigType } from '@nestjs/config';
import testConfigRegister from 'src/core/common/config/test.config';

@Injectable()
export class CreateTemplateVersionHandler {
  constructor(@Inject(testConfigRegister.KEY) private testConfig: ConfigType<typeof testConfigRegister>) {}

  public async handleAsync(command: CreateTemplateVersionCommand): Promise<void> {
    const validator = new CreateTemplateVersionValidator();
    const result = validator.validate(command);
    if (result.isInvalid()) {
      throw new ValidationError('Validation errors have occured in creating a template version.', result.getFailures());
    }

    console.log(command);
    console.log(this.testConfig.testSecret);

    return Promise.resolve();
  }
}
