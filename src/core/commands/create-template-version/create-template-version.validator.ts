import { ErrorCodes } from 'src/core/common/errors-handling/error-codes';
import { CreateTemplateVersionCommand } from './create-template-version.command';
import { AbstractValidator } from 'fluent-ts-validator';

export class CreateTemplateVersionValidator extends AbstractValidator<CreateTemplateVersionCommand> {
  constructor() {
    super();

    this.validateIfString((x) => x.test1)
      .isNotEmpty()
      .withFailureCode(ErrorCodes.IsRequiredValidator);
    this.validateIfNumber((x) => x.test2)
      .isPositive()
      .withFailureCode(ErrorCodes.IsPositiveValidator);
  }
}
