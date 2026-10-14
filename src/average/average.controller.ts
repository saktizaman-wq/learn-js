import { Body, Controller, Post } from '@nestjs/common';
import { AverageService } from './average.service.js';
import { AverageDto } from './dto/average.dto.js';

@Controller('scores')
export class AverageController {
  constructor(private readonly averageService: AverageService) {}

  @Post('average')
  calculateAverage(@Body() body: AverageDto) {
    return this.averageService.calculateAverage(body);
  }
}
