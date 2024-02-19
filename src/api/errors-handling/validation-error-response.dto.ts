import { ValidationFailureResponseDto } from './validation-failure-response.dto';

export class ValidationErrorResponseDto {
  message: string;
  validationErrors: ValidationFailureResponseDto[];
}
