import { Controller, Get } from '@nestjs/common';
import { IsHealthyRequestDto as IsHealthyResponseDto } from '../models/is-healthy-response.dto';

@Controller()
export class AppController {
  @Get()
  isHealthy(): IsHealthyResponseDto {
    return {
      healthy: true,
    };
  }
}
