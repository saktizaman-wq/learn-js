import { Injectable } from '@nestjs/common';
import { CircleDto } from './dto/circle.dto.js';

@Injectable()
export class GeometriesService {
    countCircle(dto: CircleDto) {
        const radius = dto.radius;
        const area = Math.PI * radius * radius;
        return {
            message: `Area of circle has been calculated successfullya`,
            radius, area
        };
    }
}
