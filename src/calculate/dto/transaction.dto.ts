import { Type } from "class-transformer";
import {IsNumber, IsOptional, Max, Min } from "class-validator";


export class TransactionDto {
    @IsNumber()
    @Min(0)
    @Type(() => Number)
    amount: number;
    @IsNumber()
    @Min(0)
    @Max(100)
    @Type(() => Number)
    rate: number;
    @IsOptional()
    @Type(() => Boolean)
    inclusive?: boolean = false;
}


// Field	Type	Rules
// amount	number	required, number, minimum 0
// rate	number	required, number, 0–100
// inclusive	boolean	optional, default false. If true, amount already includes tax