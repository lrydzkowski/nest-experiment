import { ExceptionFilter, Catch, ArgumentsHost, HttpStatus } from '@nestjs/common';
import { Response } from 'express';
import { ValidationError } from 'src/core/common/errors-handling/validation.error';

@Catch()
export class ValidationErrorFilter implements ExceptionFilter {
  catch(error: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    if (error instanceof ValidationError) {
      this.handleValidationError(error, response);

      return;
    }

    this.handleError(response);
  }

  private handleValidationError(error: ValidationError, response: Response): void {
    const validationErrors = error.validationFailures.map((x) => ({
      propertyName: x.propertyName,
      attemptedValue: x.attemptedValue,
      code: x.code,
      message: x.message,
    }));

    response.status(HttpStatus.UNPROCESSABLE_ENTITY).json({
      message: error.message,
      validationErrors,
    });
  }

  private handleError(response: Response): void {
    response.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
      message: 'An unexpected error has occured',
    });
  }
}
