import { Injectable } from '@nestjs/common';
import { TransactionDto } from './dto/transaction.dto.js';

@Injectable()
export class CalculateService {
  getTax(dto: TransactionDto) {
    const { amount, rate, inclusive } = dto;
    const gross = inclusive ? amount : amount * (1 + rate / 100);
    const tax = inclusive ? (amount * rate) / (100 + rate) : amount * (rate / 100);
    const net = inclusive ? amount - tax : amount;

    return {
      success: true,
      message: 'Tax calculated',
      data: {
        amount,
        rate,
        inclusive,
        tax,
        net,
        gross
      }
    };
  }
}