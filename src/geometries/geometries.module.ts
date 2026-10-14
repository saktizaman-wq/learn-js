import { Module } from '@nestjs/common';
import { GeometriesService } from './geometries.service.js';
import { GeometriesController } from './geometries.controller.js';

@Module({
  controllers: [GeometriesController],
  providers: [GeometriesService],
})
export class GeometriesModule {}
