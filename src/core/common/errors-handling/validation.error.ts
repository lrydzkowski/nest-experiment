import { ValidationFailure } from 'fluent-ts-validator';

export class ValidationError extends Error {
  validationFailures: ValidationFailure[];

  constructor(message?: string, validationFailures?: ValidationFailure[]) {
    super(message);
    this.validationFailures = validationFailures ?? [];
    this.name = 'CustomError';

    // This line is needed to make the instanceof operator work correctly
    // when transpiling from TypeScript to JavaScript
    Object.setPrototypeOf(this, ValidationError.prototype);
  }
}
