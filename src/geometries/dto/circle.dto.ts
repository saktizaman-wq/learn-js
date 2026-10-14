import { IsNotEmpty, IsNumber, Min } from "class-validator";

export class CircleDto {
    @IsNotEmpty()
    @IsNumber()
    @Min(0)
    radius!: number;
}