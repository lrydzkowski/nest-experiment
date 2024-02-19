export class ValidationFailureResponseDto {
  propertyName: string;
  attemptedValue: any;
  code: string | undefined;
  message: string | undefined;
}
