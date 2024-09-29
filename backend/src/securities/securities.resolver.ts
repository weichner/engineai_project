import { Resolver, Query, Args, Int } from '@nestjs/graphql';
import { SecuritiesService } from './services/securities/securities.service';
import { SecurityCompany } from './entities/security.entity';

@Resolver(() => SecurityCompany)
export class SecuritiesResolver {
  constructor(private readonly securitiesService: SecuritiesService) {}

  @Query(() => [SecurityCompany], { name: 'securities' })
  async findAll(): Promise<SecurityCompany[]> {
    return this.securitiesService.findAll();
  }

  @Query(() => SecurityCompany, { name: 'security' })
  async findOne(
    @Args('id', { type: () => Int }) id: number,
  ): Promise<SecurityCompany> {
    return this.securitiesService.findOne(id);
  }
}
