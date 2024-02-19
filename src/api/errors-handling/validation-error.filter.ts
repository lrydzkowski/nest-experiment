import { ExceptionFilter, Catch, ArgumentsHost, HttpStatus, Logger } from '@nestjs/common';
import { Response } from 'express';
import { ValidationError } from 'src/core/common/errors-handling/validation.error';
import { InternalServerErrorResponseDto } from './internal-server-error-response.dto';
import { ValidationFailureResponseDto } from './validation-failure-response.dto';
import { ValidationErrorResponseDto } from './validation-error-response.dto';

@Catch()
export class ValidationErrorFilter implements ExceptionFilter {
  private readonly logger = new Logger(ValidationErrorFilter.name);

  catch(error: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    if (error instanceof ValidationError) {
      this.handleValidationError(error, response);

      return;
    }

    this.handleError(error, response);
  }

  private handleValidationError(error: ValidationError, response: Response): void {
    const validationErrors: ValidationFailureResponseDto[] = error.validationFailures.map((x) => ({
      propertyName: x.propertyName,
      attemptedValue: x.attemptedValue,
      code: x.code,
      message: x.message,
    }));
    const dto: ValidationErrorResponseDto = {
      message: error.message,
      validationErrors,
    };

    response.status(HttpStatus.UNPROCESSABLE_ENTITY).json(dto);
  }

  private handleError(error: unknown, response: Response): void {
    this.logger.error(error);
    const dto: InternalServerErrorResponseDto = {
      message: 'An unexpected error has occured',
    };

    response.status(HttpStatus.INTERNAL_SERVER_ERROR).json(dto);
  }
}
