import { Injectable } from '@nestjs/common';

@Injectable()
export class AverageService {
    calculateAverage(body: { scores: number[] }) {
        const { scores } = body;
        const sum = scores.reduce((acc, score) => acc + score, 0);
        return {
            success: true,
            message: 'Score summary calculated',
            data: {
                count: scores.length,
                average: Math.round((sum / scores.length) * 10) / 10,
                highest: Math.max(...scores),
                lowest: Math.min(...scores),
                passMark: 70,
                passed: scores.filter(score => score >= 70).length,
                failed: scores.filter(score => score < 70).length
            }
        }
    }
}


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
//   }
// }