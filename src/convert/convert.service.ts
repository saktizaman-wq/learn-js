import { Injectable } from '@nestjs/common';
import { ConvertDto } from './dto/length.dto.js';

@Injectable()
export class ConvertService {
  convertLength(dto: ConvertDto) {
    const meters = dto.meters;
    const kilometers = meters / 1000;
    const centimeters = meters * 100;
    const millimeters = meters * 1000;

    return { kilometers, centimeters, millimeters };
  }
}
