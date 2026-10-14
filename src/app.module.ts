import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { GeometriesModule } from './geometries/geometries.module.js';
import { ConvertModule } from './convert/convert.module.js';
import { CalculateModule } from './calculate/calculate.module.js';
import { AverageModule } from './average/average.module.js';
import { BillsModule } from './bills/bills.module';

@Module({
  imports: [GeometriesModule, ConvertModule, CalculateModule, AverageModule, BillsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
