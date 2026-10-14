import { Test, TestingModule } from '@nestjs/testing';
import { GeometriesController } from './geometries.controller.js';
import { GeometriesService } from './geometries.service.js';

describe('GeometriesController', () => {
  let controller: GeometriesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GeometriesController],
      providers: [GeometriesService],
    }).compile();

    controller = module.get<GeometriesController>(GeometriesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
