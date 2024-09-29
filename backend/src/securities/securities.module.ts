import { Module } from '@nestjs/common';
import { SecuritiesService } from './services/securities/securities.service';
import { SecuritiesResolver } from './securities.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SecurityCompany } from './entities/security.entity';
import { Price } from './entities/price.entity';
import { PricesService } from './services/prices/prices.service';

@Module({
  imports: [TypeOrmModule.forFeature([SecurityCompany, Price])],
  providers: [SecuritiesService, PricesService, SecuritiesResolver],
})
export class SecuritiesModule {}
