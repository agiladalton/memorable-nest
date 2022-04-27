import { Test, TestingModule } from '@nestjs/testing';
import { MbassetService } from './mbasset.service';

describe('MbassetService', () => {
  let service: MbassetService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MbassetService],
    }).compile();

    service = module.get<MbassetService>(MbassetService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
