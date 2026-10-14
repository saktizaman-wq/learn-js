import { Type } from 'class-transformer';
import { IsNotEmpty, IsNumber, Max, Min } from 'class-validator';

export class ConvertDto {
  @IsNumber()
  @Min(0)
  @Max(1000000)
  meters: number;
}
