import { Test, TestingModule } from '@nestjs/testing';
import { SecuritiesResolver } from './securities.resolver';

describe('SecuritiesResolver', () => {
  let resolver: SecuritiesResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SecuritiesResolver],
    }).compile();

    resolver = module.get<SecuritiesResolver>(SecuritiesResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
