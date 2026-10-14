import { ArrayMaxSize, ArrayMinSize, IsArray, IsNumber, IsOptional, Max, Min } from "class-validator";

export class AverageDto {
    @IsArray()
    @ArrayMinSize(1)
    @ArrayMaxSize(20)
    @IsNumber({}, { each: true })
    @Min(0, { each: true })
    @Max(100, { each: true })
    scores: number[];

    @IsOptional()
    @IsNumber()
    @Min(0)
    @Max(100)
    passMark?: number = 70;
}


//   What to learn: a list of values belongs in the body. Validate an array with @IsArray(), @ArrayMinSize(), and @IsNumber({}, { each: true }).

// Method	POST
// Endpoint	/scores/average
// Input	Body only
// Body DTO

// Field	Type	Rules
// scores	number[]	required, 1–20 items, each number 0–100
// passMark	number	optional, number, 0–100, default 70
// Example request

// POST /scores/average
// Content-Type: application/json

// {
//   "scores": [80, 90, 75, 60, 88],
//   "passMark": 70
// }

// Success response (200)

// {
//   "success": true,
//   "message": "Score summary calculated",
//   "data": {
//     "count": 5,
//     "average": 78.6,
//     "highest": 90,
//     "lowest": 60,
//     "passMark": 70,
//     "passed": 4,
//     "failed": 1
//  
// Round average to 1 decimal plac