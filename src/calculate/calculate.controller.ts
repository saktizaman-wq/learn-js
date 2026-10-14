import { Controller, Get, Query } from '@nestjs/common';
import { CalculateService } from './calculate.service.js';
import { TransactionDto } from './dto/transaction.dto.js';

@Controller('calculate')
export class CalculateController {
  constructor(private readonly calculateService: CalculateService) {}

  @Get('tax')
  getTax(@Query() query: TransactionDto) {
    return this.calculateService.getTax(query);
  }
}
