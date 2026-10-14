import { Body, Controller, Post } from '@nestjs/common';
import { GeometriesService } from './geometries.service.js';
import { CircleDto } from './dto/circle.dto.js';

@Controller('geometries')
export class GeometriesController {
  constructor(private readonly geometriesService: GeometriesService) {}

  @Post('circle-area')
  circleArea(@Body()dto: CircleDto) {
    return this.geometriesService.countCircle(dto);
  }
}
