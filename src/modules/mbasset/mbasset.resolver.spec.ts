import { Test, TestingModule } from '@nestjs/testing';
import { MbassetResolver } from './mbasset.resolver';
import { MbassetService } from './mbasset.service';

describe('MbassetResolver', () => {
  let resolver: MbassetResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MbassetResolver, MbassetService],
    }).compile();

    resolver = module.get<MbassetResolver>(MbassetResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
