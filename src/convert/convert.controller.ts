import { Controller, Get, Param } from '@nestjs/common';
import { ConvertService } from './convert.service.js';
import { ConvertDto } from './dto/length.dto.js';

@Controller('convert')
export class ConvertController {
  constructor(private readonly convertService: ConvertService) {}

  @Get('length/:meters')
  convertLength(@Param() dto: ConvertDto) {
    return this.convertService.convertLength(dto);
  }
}
